import { describe, it } from "vitest";

import { FontWeight } from "./font-weight.js";

describe(FontWeight.name, () => {
	const family = "mono";
	const name = "bold";
	const value = 700;
	const fontWeight = new FontWeight(family, name, value);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(fontWeight.key).toBe(`font-${family}-weight-${name}`);
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(fontWeight.cssCustomProperty).toBe(`--font-${family}-weight-${name}`);
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(fontWeight.cssDec.startsWith(fontWeight.cssCustomProperty)).toBe(true);
		expect(fontWeight.cssDec.endsWith(value.toString())).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(fontWeight.cssVar).toMatch(new RegExp(`var\\(${fontWeight.cssCustomProperty}\\)`));
	});
});
