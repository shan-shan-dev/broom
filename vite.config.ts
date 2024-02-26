/// <reference types="vite/client" />

// NOTE: This file is needed, because without it building Storybook will fail

import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const config = defineConfig({
	plugins: [svelte()],
});

export default config;
