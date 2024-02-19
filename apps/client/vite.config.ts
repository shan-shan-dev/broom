/// <reference types="vite/client" />

import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite";
import { getInlangConfigDirURL, getInlangOutputDirURL } from "@packages/i18n/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const INLANG_CONFIG_URL = await getInlangConfigDirURL();
const INLANG_OUTPUT_URL = await getInlangOutputDirURL();

const config = defineConfig({
	plugins: [
		paraglide({
			outdir: INLANG_OUTPUT_URL.pathname,
			project: INLANG_CONFIG_URL.pathname,
		}),
		sveltekit(),
	],
});

export default config;
