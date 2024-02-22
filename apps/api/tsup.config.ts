import { defineConfig } from "tsup";

export default defineConfig((_options) => {
	return {
		cjsInterop: true,
		clean: true,
		dts: false,
		entry: ["./src/**/*.ts", "!./src/**/*.test.ts"],
		format: "esm",
		minify: false,
		outDir: "./build",
		platform: "node",
		shims: true,
		sourcemap: false,
		splitting: false,
		target: "esnext",
		treeshake: false,
	};
});
