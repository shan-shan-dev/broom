import { describe, it } from "vitest";

import { Space } from "./space.js";

describe(Space.name, () => {
	const size = "xl";
	const min = 55.5;
	const max = 60.6;
	const space = new Space(size, [min, max]);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(space.key).toBe(`space-${size}`);
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(space.cssCustomProperty).toBe(`--space-${size}`);
	});

	it("get `clamp` - returns correctly the CSS function", ({ expect }) => {
		const pattern = /^clamp\(\d+(\.\d+)?rem, \d+(\.\d+)?rem \+ \d+(\.\d+)?cqi, \d+(\.\d+)?rem\)$/;

		expect(space.clamp).toMatch(pattern);
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(space.cssDec.startsWith(space.cssCustomProperty)).toBe(true);
		expect(space.cssDec.endsWith(space.clamp)).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(space.cssVar).toMatch(new RegExp(`var\\(${space.cssCustomProperty}\\)`));
	});
});
