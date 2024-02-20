/// <reference types="vite/client" />

import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const config = defineConfig({
	plugins: [svelte()],
});

export default config;
