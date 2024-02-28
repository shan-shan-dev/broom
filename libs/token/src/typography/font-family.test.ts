import { describe, it } from "vitest";

import { FontFamily } from "./font-family.js";

describe(FontFamily.name, () => {
	const name = "mono";
	const value = "monospace";
	const font = new FontFamily(name, value);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(font.key).toBe(`font-${name}`);
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(font.cssCustomProperty).toBe(`--font-${name}`);
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(font.cssDec.startsWith(font.cssCustomProperty)).toBe(true);
		expect(font.cssDec.endsWith(`"${value}"`)).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(font.cssVar).toMatch(new RegExp(`var\\(${font.cssCustomProperty}\\)`));
	});
});
