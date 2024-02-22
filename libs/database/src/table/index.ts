import { typedObjectKeys } from "@libs/util/object";
import { getTableConfig, pgTable } from "drizzle-orm/pg-core";
import type { PostgresError } from "postgres";
import { z } from "zod";

import { timestamps } from "./builders.js";
import * as relations from "./relations.js";

export type TableName = keyof (typeof Table)["TABLE"];

export class Table<N extends TableName, C extends Parameters<typeof pgTable>[1]> {
	/**
	 * Available tables in this project's database.
	 */
	private static TABLE = {
		// TODO: Add tables here
		test: {},
	} as const;

	public static nameSchema() {
		return z.enum(typedObjectKeys(Table.TABLE) as [TableName, ...TableName[]]);
	}

	public static get<N extends TableName>(name: N): (typeof this.TABLE)[N] {
		return Table.TABLE[name];
	}

	/**
	 * Get a table name from the occurred {@link PostgresError}.
	 * @throws When {@link PostgresError} is not related to a table
	 */
	public static fromPostgresError(error: PostgresError) {
		const name = Table.nameSchema().parse(error.table_name);

		return new Table(name, Table.TABLE[name]);
	}

	public static RELATIONS = relations;

	#name: TableName;
	#columns: C & ReturnType<typeof timestamps>;

	public constructor(name: N, columns: C) {
		this.#name = Table.nameSchema().parse(name);
		this.#columns = {
			...columns,
			...timestamps(),
		};
	}

	get query() {
		return Table.TABLE[this.#name];
	}

	get config() {
		return getTableConfig(this.table);
	}

	get table() {
		return pgTable(this.#name, this.#columns);
	}
}
