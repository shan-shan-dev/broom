import { describe, it } from "vitest";

import { WORKSPACE_APPS, findAppRootPath } from "./app.js";

describe("findAppRootPath(name)", () => {
	for (const name of WORKSPACE_APPS) {
		it(`successfully finds the absolute root path for app ("${name}")`, async ({ expect }) => {
			const path = await findAppRootPath(name);

			// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
			expect(path.startsWith(process.env["HOME"] as string)).toBe(true);
			expect(path.endsWith(`apps/${name}`)).toBe(true);
		});
	}
});
