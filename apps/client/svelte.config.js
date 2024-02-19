import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		files: {
			lib: resolve(__dirname, "src", "lib"),
		},
	},
};

export default config;
