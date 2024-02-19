import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { existsSync } from "node:fs";

import { log } from "@packages/logger";

import { WORKSPACE_PACKAGES } from "./package.gen.js";
import { getWorkspaceRootPathURL } from "./main.js";

export const PACKAGES_DIRNAME = "packages";

export { WORKSPACE_PACKAGES } from "./package.gen.js";
/** @see {@link WORKSPACE_PACKAGES} */
export type WorkspacePackage = (typeof WORKSPACE_PACKAGES)[number];

/**
 * Get the **absolute path URL** to the project's workspace targeted _package_ root directory.
 * @param name - workspace package to target
 */
export async function getPackageRootPathURL<T extends WorkspacePackage>(name: T): Promise<URL> {
	const workspaceRootURL = await getWorkspaceRootPathURL();
	const packageRootURL = pathToFileURL(join(workspaceRootURL.pathname, PACKAGES_DIRNAME, name));

	if (existsSync(packageRootURL.pathname)) {
		log.debug(`Absolute path of the package directory: ${packageRootURL}`);
		return packageRootURL;
	}

	throw Error(`Couldn't determine the absolute path for the package - "${name}" - root directory!`);
}
