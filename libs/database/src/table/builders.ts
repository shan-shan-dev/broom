import { timestamp } from "drizzle-orm/pg-core/columns/timestamp";

/**
 * This snippets helps to ensure every table in this project uses the same **timestamps**.
 */
export function timestamps() {
	return {
		created_at: timestamp("created_at").notNull().defaultNow(),
		// TODO: Implement auto-update, when the feature available
		// Ref: https://github.com/drizzle-team/drizzle-orm/issues/956#issuecomment-1732327425
		updated_at: timestamp("updated_at").notNull().defaultNow(),
	} as const;
}
