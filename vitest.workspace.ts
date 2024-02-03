/// <reference types="vitest" />

import { defineWorkspace } from "vitest/config";

/** @see {@link https://vitest.dev/guide/workspace} */
export default defineWorkspace([
	// Binaries
	"./apps/*",
	// Libraries
	"./packages/*",
]);
