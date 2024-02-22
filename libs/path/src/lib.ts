import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import { log } from "@libs/logger";

import { WORKSPACE_LIBS } from "./lib.gen.js";
import { getWorkspaceRootPathURL } from "./main.js";

export const LIBS_DIRNAME = "libs";

export { WORKSPACE_LIBS } from "./lib.gen.js";
/** @see {@link WORKSPACE_LIBS} */
export type WorkspaceLib = (typeof WORKSPACE_LIBS)[number];

/**
 * Get the **absolute path URL** to the project's workspace targeted _library_ package root directory.
 * @param name - workspace library package to target
 */
export async function getLibRootPathURL<T extends WorkspaceLib>(name: T): Promise<URL> {
	const workspaceRootURL = await getWorkspaceRootPathURL();
	const packageRootURL = pathToFileURL(join(workspaceRootURL.pathname, LIBS_DIRNAME, name));

	if (existsSync(packageRootURL.pathname)) {
		log.debug(`Absolute path of the package directory: ${packageRootURL}`);
		return packageRootURL;
	}

	throw Error(`Couldn't determine the absolute path for the package - "${name}" - root directory!`);
}
