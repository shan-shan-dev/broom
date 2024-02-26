// NOTE: This file is needed, because without it building Storybook will fail

import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/vite-plugin-svelte").Options} */
const config = {
	preprocess: vitePreprocess(),
};

export default config;
