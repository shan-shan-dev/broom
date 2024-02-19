/// <reference types="vite/client" />

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = defineConfig({
	plugins: [
		paraglide({
			outdir: resolve(__dirname, "..", "..", "packages", "i18n", "src"),
			project: resolve(__dirname, "..", "..", "packages", "i18n", "project.inlang"),
		}),
		sveltekit(),
	],
});

export default config;
