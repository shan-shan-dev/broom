/// <reference types="vite/client" />

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const config = defineConfig({
	plugins: [sveltekit()],
});

export default config;
