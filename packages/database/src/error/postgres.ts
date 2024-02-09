import { log } from "@packages/logger";
import { PostgresError } from "postgres";

import { DatabaseError } from ".";
import { Table } from "../table";

/** Improved PostgresError type into issue. */
export type PostgresIssue = Omit<PostgresError, "table"> & {
	table?: ReturnType<(typeof Table)["fromPostgresError"]> | undefined;
};

/**
 * Isolated error handling for {@link PostgresError}, for a better maintenance.
 */
export function handlePostgresError(error: PostgresError) {
	log.trace({ error }, "Handling PostgresError...");

	let table: ReturnType<(typeof Table)["fromPostgresError"]> | undefined;

	try {
		table = Table.fromPostgresError(error);
		log.debug({ table }, "PostgresError is related to a table");
	} catch {
		table = undefined;
	}

	// TODO: Add more when they occur
	switch (error.code) {
		case "23505": {
			throw new DatabaseError({
				code: DatabaseError.CODE.NOT_UNIQUE,
				message: error.message,
				details: [
					{
						...error,
						table,
					},
				],
			});
		}

		case "42P01": {
			throw new DatabaseError({
				code: DatabaseError.CODE.NO_RELATIONS,
				message: error.message,
				details: [error],
			});
		}

		default: {
			log.fatal({ error }, "Unhandled PostgresError occurred");
			throw new TypeError(`Unhandled postgres error (code: ${error.code}) has occurred!`);
		}
	}
}
