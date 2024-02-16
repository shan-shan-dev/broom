import { describe, it } from "vitest";

import { WORKSPACE_PACKAGES, getPackageRootPathURL } from "./package.js";

describe(`${getPackageRootPathURL.name}(name)`, () => {
	for (const name of WORKSPACE_PACKAGES) {
		it(`succeeds for the package name ("${name}")`, async ({ expect }) => {
			const pathURL = await getPackageRootPathURL(name);

			expect(pathURL).toBeInstanceOf(URL);
			// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
			expect(pathURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
			expect(pathURL.pathname.endsWith(`packages/${name}`)).toBe(true);
		});
	}
});
