// NOTE: This was needed by Storybook, see if we can get rid of it.

import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/vite-plugin-svelte").Options} */
const config = {
	preprocess: vitePreprocess(),
};

export default config;
