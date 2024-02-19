import { describe, it } from "vitest";

import { getWorkspaceRootPathURL } from "./main.js";

describe(`${getWorkspaceRootPathURL.name}()`, () => {
	it("successfully returns the workspace root absolute path URL", async ({ expect }) => {
		const pathURL = await getWorkspaceRootPathURL();

		expect(pathURL).toBeInstanceOf(URL);
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		expect(pathURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
		expect(pathURL.pathname.endsWith("/shan-shan")).toBe(true);
	});
});
