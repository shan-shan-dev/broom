import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { log } from "@libs/logger";
import handlebars from "handlebars";

import { getWorkspaceRootPathURL } from "../src/main.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_DIR = resolve(__dirname, "..", "src");
const OUTPUT_EXT = ".gen.ts";

async function prebuild() {
	const workspaceRootURL = await getWorkspaceRootPathURL();

	const [appNames, packageNames] = await Promise.all([
		getDirNames(workspaceRootURL, "apps"),
		getDirNames(workspaceRootURL, "libs"),
	]);

	compileTemplate("app", appNames);
	compileTemplate("lib", packageNames);
}

await prebuild();

function compileTemplate(target: string, names: string[]): void {
	const template = readFileSync(resolve(__dirname, "templates", `${target}.ts.hbs`), {
		encoding: "utf8",
	});
	const compiled = handlebars.compile(template, { noEscape: true })({
		names: formatNames(names),
	});
	const outputPath = resolve(SOURCE_DIR, `${target}${OUTPUT_EXT}`);

	writeFileSync(outputPath, compiled, { encoding: "utf8" });
	log.debug(`[prebuild]: Automatically generated ${target}s names at: ${pathToFileURL(outputPath)}`);
}

function formatNames(names: string[]): string {
	const formatted = names.map((name) => `"${name}",`).join("\n\t");

	return `\t${formatted}`;
}

async function getDirNames(workspaceRootURL: URL, dirname: string) {
	const dirPath = resolve(workspaceRootURL.pathname, dirname);

	if (!existsSync(dirPath)) {
		throw new Error(`Directory not found: ${dirPath}`);
	}

	return readdirSync(dirPath, {
		withFileTypes: true,
	})
		.filter((path) => path.isDirectory())
		.map((dir) => dir.name);
}
