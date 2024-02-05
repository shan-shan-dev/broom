import { describe, it } from "vitest";

import { findWorkspaceRootPath } from "./main.js";

describe("findWorkspaceRootPath()", () => {
	it("successfully found the workspace absolute root path", async ({ expect }) => {
		const pathURL = await findWorkspaceRootPath();

		expect(pathURL).toBeInstanceOf(URL);
		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		expect(pathURL.pathname.startsWith(process.env["HOME"] as string)).toBe(true);
		expect(pathURL.pathname.endsWith("/shan-shan")).toBe(true);
	});
});
