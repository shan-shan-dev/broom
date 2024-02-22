import pino from "pino";
import pretty from "pino-pretty";

/** Enum of available log levels for printing certain group of messages into terminal. */
export const LOG_LEVELS = [
	// biome-ignore format: Easier to read & modify
	"silent",
	"fatal",
	"error",
	"warn",
	"info",
	"debug",
	"trace",
] as const;

/** @see {@link LOG_LEVELS} */
export type LogLevel = (typeof LOG_LEVELS)[number];

export const DEFAULT_LOG_LEVEL: LogLevel = "info";

export const log = pino(
	{
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		level: (process.env["LOG"] || DEFAULT_LOG_LEVEL) as LogLevel,
	},
	pretty({
		colorize: true,
		levelFirst: true,
	}),
);

export function setLoggerLevel(level: LogLevel) {
	if (level !== "silent") {
		console.log(`Logger level is set to: ${level}`);
	}

	log.level = level;
}
