import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import paraglide from "@inlang/paraglide-js-adapter-astro";
import { getInlangConfigDirURL, getInlangOutputDirURL } from "@packages/i18n/config";
import { defineConfig } from "astro/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INLANG_CONFIG_URL = await getInlangConfigDirURL();
const INLANG_OUTPUT_URL = await getInlangOutputDirURL();

/** @see {@link https://astro.build/config} */
const config = defineConfig({
	integrations: [
		paraglide({
			project: INLANG_CONFIG_URL.pathname,
			outdir: INLANG_OUTPUT_URL.pathname,
		}),
	],

	outDir: resolve(__dirname, "dist"),
});

export default config;
