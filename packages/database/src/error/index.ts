import { log } from "@packages/logger";
import { PostgresError } from "postgres";
import { ZodError, type ZodIssue } from "zod";

import { Table } from "../table";
import { type ConnectionError, isConnectionError } from "./connection.js";
import { type PostgresIssue, handlePostgresError } from "./postgres.js";

// TODO: Tracker for DrizzleORM error handling feature:
// https://github.com/drizzle-team/drizzle-orm/issues/376

type ErrorCode = keyof typeof DatabaseError.CODE;
type ErrorDetail = ConnectionError | Array<PostgresIssue | ZodIssue>;

interface ErrorData {
	message: string;
	code: ErrorCode;
	details?: ErrorDetail;
}

/**
 * Custom error related to the database usage only,
 * with type-safety in mind and easier error handling.
 */
export class DatabaseError extends Error {
	/**
	 * Enum of available _(currently handled)_ error codes.
	 */
	public static CODE = {
		NO_RELATIONS: "NO_RELATIONS",
		NO_CONNECTION: "NO_CONNECTION",
		INVALID_QUERYDATA_RECEIVED: "INVALID_QUERY_DATA_RECEIVED",
		INVALID_SCHEMA: "INVALID_SCHEMA",
		NOT_FOUND: "NOT_FOUND",
		NOT_UNIQUE: "NOT_UNIQUE",
	} as const;

	/**
	 * Create from received postgres error - library for Node.js.
	 * @param error - {@link PostgresError}
	 */
	static fromPostgres(error: PostgresError) {
		return handlePostgresError(error);
	}

	/**
	 * Create from parsing with `zod` - schema validator.
	 * @param error - {@link ZodError}
	 */
	static fromZod(error: ZodError) {
		const { issues, message } = error;

		return new DatabaseError({
			code: DatabaseError.CODE.INVALID_SCHEMA,
			message,
			details: issues,
		});
	}

	/**
	 * Create the database error to throw during e.g. the failed attempt of a database query.
	 * @param error - error received from the catch
	 */
	public static create(error: unknown): DatabaseError {
		log.trace({ error }, "Trying to determine the database error...");

		if (error instanceof DatabaseError) {
			throw error;
		}

		if (error instanceof PostgresError) {
			throw DatabaseError.fromPostgres(error);
		}

		if (error instanceof ZodError) {
			throw DatabaseError.fromZod(error);
		}

		if (isConnectionError(error)) {
			log.fatal({ error }, "ConnectionError");
			throw new DatabaseError({
				code: DatabaseError.CODE.NO_CONNECTION,
				message: "Couldn't establish a connection with the database.",
				details: error,
			});
		}

		log.fatal({ error }, "An unhandled unknown error has occurred on the database.");
		throw error;
	}

	public readonly code: ErrorCode;
	public readonly table?: ReturnType<(typeof Table)["get"]> | undefined;
	public readonly details?: ErrorDetail | undefined;

	constructor(data: ErrorData) {
		const { code, details, message } = data;

		super(message);
		Error.captureStackTrace(this, DatabaseError);
		this.code = code;

		if (details) {
			this.details = details;
		}
	}

	/** Convert to JSON payload */
	get payload() {
		return {
			message: this.message,
			code: this.code,
			details: this.details,
		};
	}
}
