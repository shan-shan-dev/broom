import path from "node:path";

import { log } from "@packages/logger";
import { findUp, pathExists } from "find-up";

import { isAbsolutePath, pathToURL } from "./util.js";

/**
 * A file which will determine that the directory is a workspace root.
 */
const FILENAME_TO_FIND = "pnpm-workspace.yaml";

/**
 * Find the workspace root based on the existence
 * of a file specified in {@link FILENAME_TO_FIND}.
 *
 * @throws When the directory cannot be determined.
 */
export async function findWorkspaceRootPath(): Promise<URL> {
	log.trace(`Attempting to determine the workspace root path based on the filename: "${FILENAME_TO_FIND}"...`);
	const directoryPath = await findUp(determinePath, { type: "directory" });

	if (directoryPath && isAbsolutePath(directoryPath)) {
		return pathToURL(directoryPath);
	}

	throw new Error(
		`Couldn't determine the workspace ROOT absolute path based on the filename to find: "${FILENAME_TO_FIND}"!`,
	);
}

/**
 * A callback to run in `findUp()`
 * @param directory - Directory path which is being determined
 */
async function determinePath(directory: string): ReturnType<typeof findUp> {
	if (!isAbsolutePath(directory)) {
		throw new TypeError("The provided directory path is not absolute.");
	}

	const pathAttempt = path.join(directory, FILENAME_TO_FIND);
	const pathHasFile = await pathExists(pathAttempt);
	const directoryURL = pathToURL(directory);

	if (pathHasFile) {
		log.debug({ directoryURL }, "Determined the absolute path of the project workspace ROOT");
		return directory;
	}

	log.trace({ directoryURL }, "This is NOT the workspace ROOT");
}
