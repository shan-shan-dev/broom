import { describe, it } from "vitest";

import { LIBS_DIRNAME, WORKSPACE_LIBS, getLibRootPathURL } from "./lib.js";

describe(`${getLibRootPathURL.name}(name)`, () => {
	for (const name of WORKSPACE_LIBS) {
		it(`succeeds for the library package name ("${name}")`, async ({ expect }) => {
			const pathURL = await getLibRootPathURL(name);

			expect(pathURL).toBeInstanceOf(URL);
			// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
			expect(pathURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
			expect(pathURL.pathname.endsWith(`${LIBS_DIRNAME}/${name}`)).toBe(true);
		});
	}
});
