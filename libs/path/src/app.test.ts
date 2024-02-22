import { describe, it } from "vitest";

import { APPS_DIRNAME, WORKSPACE_APPS, getAppRootPathURL } from "./app.js";

describe(`${getAppRootPathURL.name}(name)`, () => {
	for (const name of WORKSPACE_APPS) {
		it(`succeeds for the app name ("${name}")`, async ({ expect }) => {
			const pathURL = await getAppRootPathURL(name);

			expect(pathURL).toBeInstanceOf(URL);
			// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
			expect(pathURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
			expect(pathURL.pathname.endsWith(`${APPS_DIRNAME}/${name}`)).toBe(true);
		});
	}
});
