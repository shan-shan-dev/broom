import path from "node:path";

import { log } from "@packages/logger";

import { findWorkspaceRootPath } from "./main.js";

/**
 * Currently available project's workspace **library** packages.
 */
export const WORKSPACE_PACKAGES = [
	// biome-ignore format: Easier to read & modify
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
 * Get the **absolute path** to the project's workspace targeted _package_ root directory.
 * @param name - workspace package to target
 */
export async function findPackageRootPath<T extends WorkspacePackage>(name: T) {
	const directory = "packages";
	const result = path.join(await findWorkspaceRootPath(), directory, name) as `/${string}/${typeof directory}/${T}`;

	// TODO: Create util snippet linkFile(path)
	log.debug(`Determined the absolute path of the LIBRARY package "@${directory}/${name}": file://${result}`);

	return result;
}
