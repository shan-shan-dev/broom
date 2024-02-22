import { LOG_LEVELS, log, setLoggerLevel } from "@libs/logger";
import { Name } from "@libs/unit/struct/name";
import { DatabasePassword } from "@libs/unit/struct/password/database";
import { type Schemas, parseEnv } from "znv";
import { z } from "zod";

import { loadDotenv } from "./dotenv.js";
import { ENVIRONMENTS } from "./environment.js";

/** @see {@link CONFIG_SCHEMA} */
export type EnvironmentVariable = keyof typeof CONFIG_SCHEMA;

export const CONFIG_SCHEMA = {
	// General
	DEBUG: z
		.boolean({
			description: "Enable debugging mode.",
		})
		.default(false),

	LOG: z
		.enum(LOG_LEVELS, {
			description: "Log output level.",
		})
		.default("silent"),

	NODE_ENV: z.enum(ENVIRONMENTS, { description: "The project environment." }).default("development"),

	// API
	API_CLOSE_GRACE_DELAY: z
		.number({ coerce: true, description: "Number of milliseconds for the graceful close to finish." })
		.min(500)
		.max(10_000)
		.default(500),
	API_HOSTNAME: z
		.string({
			description: "API hostname.",
		})
		.ip({ version: "v4" })
		.default("0.0.0.0"),
	// biome-ignore format: Better readability
	API_PORT:
		z.number({ coerce: true, description: "API port to listen." })
		.min(1024)
		.max(65_535)
		.default(3000),

	// Database
	DB_USER: z
		.string({
			description: "Database user for authentication.",
		})
		.transform((v) => new Name(v)),
	DB_PASSWORD: z
		.string({
			description: "Database password for authentication.",
		})
		.transform((v) => new DatabasePassword(v)),
	DB_HOSTNAME: z
		.string({
			description: "Database hostname.",
		})
		.ip({ version: "v4" })
		.default("0.0.0.0"),
	// biome-ignore format: Better readability
	DB_PORT: z
		.number({ coerce: true, description: "Database port to listen." })
		.min(1024)
		.max(65_535)
		.default(5432),
	DB_NAME: z
		.string({
			description: "Database name.",
		})
		.default("sample")
		.transform((v) => new Name(v)),
} satisfies Schemas;

export type Config = z.infer<z.ZodObject<typeof CONFIG_SCHEMA>>;

/** Load the project configuration via environment variables _(`.env` file)_. */
export async function loadConfig(): Promise<Config> {
	await loadDotenv();

	log.trace("Validating the project configuration via environment variables...");
	const config = parseEnv(process.env, CONFIG_SCHEMA);

	setLoggerLevel(config.LOG);

	log.debug({ config }, "The project project configuration is valid");
	return config as Config;
}
