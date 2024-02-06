import { LOG_LEVELS, log, setLoggerLevel } from "@packages/logger";
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
