import { describe, it } from "vitest";

import { WORKSPACE_PACKAGES, findPackageRootPath } from "./package.js";

describe("getPackageRootPath(name)", () => {
	for (const name of WORKSPACE_PACKAGES) {
		it(`successfully finds the absolute root path for the package ("${name}")`, async ({ expect }) => {
			const path = await findPackageRootPath(name);

			// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
			expect(path.startsWith(process.env["HOME"] as string)).toBe(true);
			expect(path.endsWith(`packages/${name}`)).toBe(true);
		});
	}
});
