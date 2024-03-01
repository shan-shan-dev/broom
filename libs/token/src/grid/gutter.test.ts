import { describe, it } from "vitest";

import { GridGutter } from "./gutter.js";

describe(GridGutter.name, () => {
	const min = 330;
	const max = 1240;
	const gridGutter = new GridGutter([min, max]);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(gridGutter.key).toBe("grid-gutter");
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(gridGutter.cssCustomProperty).toBe("--grid-gutter");
	});

	it("get `clamp` - returns correctly the CSS function", ({ expect }) => {
		const pattern = /^clamp\(\d+(\.\d+)?rem, \d+(\.\d+)?rem \+ \d+(\.\d+)?cqi, \d+(\.\d+)?rem\)$/;

		expect(gridGutter.clamp).toMatch(pattern);
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(gridGutter.cssDec.startsWith(gridGutter.cssCustomProperty)).toBe(true);
		expect(gridGutter.cssDec.endsWith(gridGutter.clamp)).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(gridGutter.cssVar).toMatch(new RegExp(`var\\(${gridGutter.cssCustomProperty}\\)`));
	});
});
