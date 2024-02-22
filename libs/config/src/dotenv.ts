import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { log } from "@libs/logger";
import { getWorkspaceRootPathURL } from "@libs/path";
import { type DotenvConfigOptions, config } from "dotenv";

export async function findDotenvFilePath(): Promise<URL | undefined> {
	const rootDirPathURL = await getWorkspaceRootPathURL();
	const dotenvFilePath = resolve(rootDirPathURL.pathname, ".env");

	if (existsSync(dotenvFilePath)) {
		const dotenvFilePathURL = pathToFileURL(dotenvFilePath);

		log.debug(`Dotenv: ${dotenvFilePathURL}`);
		return dotenvFilePathURL;
	}

	log.info("No dotenv file was found at the root of this project, will parse variables from process.env");
}

export async function loadDotenv() {
	const options: DotenvConfigOptions = {
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		debug: process.env["DEBUG"] !== undefined,
	};
	const dotenvFilePath = await findDotenvFilePath();

	if (dotenvFilePath) {
		options.path = dotenvFilePath;
	}

	const { error, parsed } = config(options);

	if (error) {
		log.fatal({ error }, "DotenvError");
		throw error;
	}

	if (parsed) {
		return parsed;
	}

	throw new Error("Nothing has returned from parsing the dotenv file.");
}
