import type { Config } from "@packages/config";
import { log } from "@packages/logger";

/**
 * Used database engine in the project - usually needed for specifying the database URL.
 */
export const DB_PROTOCOL = "postgres";

/**
 * Determine the database URL based on the project config.
 * @param config - Project configuration
 */
export function getDatabaseURL(config: Config): URL {
	const user = config.DB_USER;
	const password = config.DB_PASSWORD.reveal();
	const hostname = config.DB_HOSTNAME;
	const port = config.DB_PORT;
	const name = config.DB_NAME;
	const url = new URL(`${DB_PROTOCOL}://${user}:${password}@${hostname}:${port}/${name}`);

	// FIXME: Make the debug log more secure without revealing the user & password
	log.debug({ url }, "Database URL");
	return url;
}
