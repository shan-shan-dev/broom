import path from "node:path";

import { log } from "@packages/logger";

import { findWorkspaceRootPath } from "./main.js";

/**
 * Currently available project workspace's **binary** packages _(apps)_.
 */
export const WORKSPACE_APPS = [
	// TODO: Make it automatically generated via script.
	"api",
	"client",
	"landing",
] as const;

/** @see {@link WORKSPACE_APPS} */
export type WorkspaceApp = (typeof WORKSPACE_APPS)[number];

/**
 * Get the **absolute path URL** to the project workspace targeted _app_ root directory.
 * @param name - workspace app to target
 */
export async function findAppRootPath<T extends WorkspaceApp>(name: T): Promise<URL> {
	const directory = "apps";
	const directoryURL = await findWorkspaceRootPath();

	directoryURL.pathname = path.join(directoryURL.pathname, directory, name);

	log.debug({ directoryURL }, "Absolute path of the APP directory");
	return directoryURL;
}
