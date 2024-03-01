import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { log } from "@libs/logger";
import handlebars from "handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_EXT = ".gen.css";
const SOURCE_DIR = resolve(__dirname, "..", "..", "src");

export function getTemplate(filename: string) {
	return readFileSync(resolve(__dirname, "templates", filename), {
		encoding: "utf8",
	});
}

export function compileTemplate(template: string, data: Record<string, string>) {
	return handlebars.compile(template, { noEscape: true })(data);
}

export function getOutputPath(dirname: string, filename: string) {
	return resolve(SOURCE_DIR, dirname, `${filename}${OUTPUT_EXT}`);
}

export function saveCompiled(compiled: string, outputPath: string) {
	const dirPath = dirname(outputPath);

	if (!existsSync(dirPath)) {
		mkdirSync(dirPath);
	}

	writeFileSync(outputPath, compiled, { encoding: "utf8" });
	log.debug(`[build]: Generated file at: ${pathToFileURL(outputPath)}`);
}
