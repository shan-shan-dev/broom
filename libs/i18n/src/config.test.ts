import { describe, it } from "vitest";

import {
	INLANG_OUTPUT_DIR_PATH,
	INLANG_PROJECT_DIR_NAME,
	getInlangConfigDirURL,
	getInlangOutputDirURL,
} from "./config.js";

describe(`${getInlangConfigDirURL.name}()`, () => {
	it("successfully returns the path URL", async ({ expect }) => {
		const configDirURL = await getInlangConfigDirURL();

		expect(configDirURL).toBeInstanceOf(URL);
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		expect(configDirURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
		expect(configDirURL.pathname.endsWith(INLANG_PROJECT_DIR_NAME)).toBe(true);
	});
});

describe(`${getInlangOutputDirURL.name}()`, () => {
	it("successfully returns the path URL", async ({ expect }) => {
		const outputDirURL = await getInlangOutputDirURL();

		expect(outputDirURL).toBeInstanceOf(URL);
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		expect(outputDirURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
		expect(outputDirURL.pathname.endsWith(INLANG_OUTPUT_DIR_PATH)).toBe(true);
	});
});
