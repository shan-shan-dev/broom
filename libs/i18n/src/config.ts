import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { log } from "@libs/logger";
import { getLibRootPathURL } from "@libs/path/lib";

/** Directory name of the inlang config. */
export const INLANG_PROJECT_DIR_NAME = "project.inlang";

/** Directory name of where inlang output goes. */
export const INLANG_OUTPUT_DIR_PATH = "src/paraglide";

/**
 * Get URL to the directory for the inlang configuration set for this project workspace.
 * @see {@link https://inlang.com/documentation/concept/project}
 */
export async function getInlangConfigDirURL() {
	const packageRoot = await getLibRootPathURL("i18n");
	const url = pathToFileURL(resolve(packageRoot.pathname, INLANG_PROJECT_DIR_NAME));

	log.debug(`inlang's project configuration directory: ${url}`);
	return url;
}

/**
 * Get URL to the directory for the inlang output directory for this project workspace i18n messages.
 * @see {@link https://inlang.com/}
 */
export async function getInlangOutputDirURL() {
	const packageRoot = await getLibRootPathURL("i18n");
	const url = pathToFileURL(resolve(packageRoot.pathname, INLANG_OUTPUT_DIR_PATH));

	log.debug(`inlang's project configuration directory: ${url}`);
	return url;
}
