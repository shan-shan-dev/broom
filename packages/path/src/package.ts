import path from "node:path";

import { log } from "@packages/logger";

import { findWorkspaceRootPath } from "./main.js";

/**
 * Currently available project's workspace **library** packages.
 */
export const WORKSPACE_PACKAGES = [
	// TODO: Make it automatically generated via script.
	"config",
	"core",
	"database",
	"logger",
	"path",
	"unit",
	"util",
] as const;

/** @see {@link WORKSPACE_PACKAGES} */
export type WorkspacePackage = (typeof WORKSPACE_PACKAGES)[number];

/**
 * Get the **absolute path URL** to the project's workspace targeted _package_ root directory.
 * @param name - workspace package to target
 */
export async function findPackageRootPath<T extends WorkspacePackage>(name: T): Promise<URL> {
	const directory = "packages";
	const directoryURL = await findWorkspaceRootPath();

	directoryURL.pathname = path.join(directoryURL.pathname, directory, name);

	log.debug({ directoryURL }, "Absolute path of the APP directory");
	return directoryURL;
}
