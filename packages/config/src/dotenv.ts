import { join } from "node:path";

import { log } from "@packages/logger";
import { findWorkspaceRootPath } from "@packages/path";
import dotenv from "dotenv";

export async function findDotenvFilePath(): Promise<URL> {
	const rootDirPathURL = await findWorkspaceRootPath();

	rootDirPathURL.pathname = join(rootDirPathURL.pathname, ".env");

	log.debug({ dotenvFilePath: rootDirPathURL }, "Dotenv file path");
	return rootDirPathURL;
}

export async function loadDotenv() {
	const dotenvFilePath = await findDotenvFilePath();

	const { error, parsed } = dotenv.config({
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		debug: process.env["DEBUG"] !== undefined,
		path: dotenvFilePath,
	});

	if (error) {
		log.fatal({ error }, "DotenvError");
		throw error;
	}

	if (parsed) {
		if (log.level === "trace" || log.level === "debug") {
			for (const variable in Object.keys(parsed)) {
				log.debug(`Found set environment variable "${variable}" in dotenv file`);
			}
		}

		return parsed;
	}

	throw new Error("Nothing has returned from parsing the dotenv file.");
}
