// import { execa } from "execa";
import { defineConfig } from "tsup";

export default defineConfig((options) => {
	const { watch } = options;

	return {
		cjsInterop: true,
		clean: true,
		dts: false,
		entry: ["./src/**/*.ts", "!./src/**/*.test.ts"],
		format: "esm",
		minify: false,
		outDir: "./bin",
		platform: "node",
		shims: true,
		sourcemap: false,
		splitting: false,
		target: "esnext",
		treeshake: false,
		// onSuccess: async () => {
		// 	if (watch) {
		// 		execa("pnpm", ["start"], {
		// 			all: true,
		// 			shell: true,
		// 			stdio: "inherit",
		// 		});
		// 	}
		// },
	};
});
