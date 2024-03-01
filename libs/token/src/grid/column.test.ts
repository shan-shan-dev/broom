import { describe, it } from "vitest";

import { GridColumn } from "./column.js";

describe(GridColumn.name, () => {
	const value = 12;
	const gridColumn = new GridColumn(value);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(gridColumn.key).toBe("grid-column");
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(gridColumn.cssCustomProperty).toBe("--grid-column");
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(gridColumn.cssDec.startsWith(gridColumn.cssCustomProperty)).toBe(true);
		expect(gridColumn.cssDec.endsWith(gridColumn.value.toString())).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(gridColumn.cssVar).toMatch(new RegExp(`var\\(${gridColumn.cssCustomProperty}\\)`));
	});
});
