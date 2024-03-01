import { describe, it } from "vitest";

import { GridWidth } from "./width.js";

describe(GridWidth.name, () => {
	const name = "min";
	const value = 330;
	const gridWidth = new GridWidth(name, value);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(gridWidth.key).toBe(`grid-width-${name}`);
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(gridWidth.cssCustomProperty).toBe(`--grid-width-${name}`);
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(gridWidth.cssDec.startsWith(gridWidth.cssCustomProperty)).toBe(true);
		expect(gridWidth.cssDec.endsWith(gridWidth.value.toString())).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(gridWidth.cssVar).toMatch(new RegExp(`var\\(${gridWidth.cssCustomProperty}\\)`));
	});
});
