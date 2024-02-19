import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import { log } from "@packages/logger";

import { WORKSPACE_APPS } from "./app.gen.js";
import { getWorkspaceRootPathURL } from "./main.js";

export const APPS_DIRNAME = "apps";

export { WORKSPACE_APPS } from "./app.gen.js";
/** @see {@link WORKSPACE_APPS} */
export type WorkspaceApp = (typeof WORKSPACE_APPS)[number];

/**
 * Get the **absolute path URL** to the project workspace targeted _app_ root directory.
 * @param name - workspace app to target
 */
export async function getAppRootPathURL<T extends WorkspaceApp>(name: T): Promise<URL> {
	const workspaceRootURL = await getWorkspaceRootPathURL();
	const packageRootURL = pathToFileURL(join(workspaceRootURL.pathname, APPS_DIRNAME, name));

	if (existsSync(packageRootURL.pathname)) {
		log.debug(`Absolute path of the package directory: ${packageRootURL}`);
		return packageRootURL;
	}

	throw Error(`Couldn't determine the absolute path for the app - "${name}" - root directory!`);
}
