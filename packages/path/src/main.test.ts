import { describe, it } from "vitest";

import { findWorkspaceRootPath } from "./main.js";

describe("findWorkspaceRootPath()", () => {
	it("successfully found the workspace absolute root path", async ({ expect }) => {
		const path = await findWorkspaceRootPath();

		// biome-ignore lint/complexity/useLiteralKeys: Conflicting with TS config
		expect(path.startsWith(process.env["HOME"] as string)).toBe(true);
		expect(path.endsWith("/shan-shan")).toBe(true);
	});
});
