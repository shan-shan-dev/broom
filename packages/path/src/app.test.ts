import { describe, it } from "vitest";

import { WORKSPACE_APPS, findAppRootPath } from "./app.js";

describe("findAppRootPath(name)", () => {
	for (const name of WORKSPACE_APPS) {
		it(`successfully finds the absolute root path for app ("${name}")`, async ({ expect }) => {
			const pathURL = await findAppRootPath(name);

			expect(pathURL).toBeInstanceOf(URL);
			// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
			expect(pathURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
			expect(pathURL.pathname.endsWith(`apps/${name}`)).toBe(true);
		});
	}
});
