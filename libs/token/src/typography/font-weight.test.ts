import { describe, it } from "vitest";

import {
	FontMonoWeightBold,
	FontMonoWeightRegular,
	FontSansWeightBlack,
	FontSansWeightBold,
	FontSansWeightLight,
	FontSansWeightMedium,
	FontSansWeightRegular,
	FontSansWeightThin,
	FontSerifWeightBlack,
	FontSerifWeightBold,
	FontSerifWeightLight,
	FontSerifWeightMedium,
	FontSerifWeightRegular,
	FontSerifWeightThin,
} from "./font-weight.js";

describe("FontWeight", () => {
	for (const weight of [FontMonoWeightRegular, FontMonoWeightBold]) {
		describe(weight.toString(), () => {
			it("get `cssVarDef` - returns correctly the CSS variable definition", ({ expect }) => {
				const pattern = new RegExp(`${weight.key}:${weight.value}`);

				expect(weight.cssVarDef).toMatch(pattern);
			});

			it("get `cssVarDef` - returns correctly the CSS variable", ({ expect }) => {
				const pattern = new RegExp(`var\\(--${weight.key}\\)`);

				expect(weight.cssVar).toMatch(pattern);
			});
		});
	}

	for (const weight of [
		FontSansWeightThin,
		FontSansWeightLight,
		FontSansWeightRegular,
		FontSansWeightMedium,
		FontSansWeightBold,
		FontSansWeightBlack,
	]) {
		describe(weight.toString(), () => {
			it("get `cssVarDef` - returns correctly the CSS variable definition", ({ expect }) => {
				const pattern = new RegExp(`${weight.key}:${weight.value}`);

				expect(weight.cssVarDef).toMatch(pattern);
			});

			it("get `cssVarDef` - returns correctly the CSS variable", ({ expect }) => {
				const pattern = new RegExp(`var\\(--${weight.key}\\)`);

				expect(weight.cssVar).toMatch(pattern);
			});
		});
	}

	for (const weight of [
		FontSerifWeightThin,
		FontSerifWeightLight,
		FontSerifWeightRegular,
		FontSerifWeightMedium,
		FontSerifWeightBold,
		FontSerifWeightBlack,
	]) {
		describe(weight.toString(), () => {
			it("get `cssVarDef` - returns correctly the CSS variable definition", ({ expect }) => {
				const pattern = new RegExp(`${weight.key}:${weight.value}`);

				expect(weight.cssVarDef).toMatch(pattern);
			});

			it("get `cssVarDef` - returns correctly the CSS variable", ({ expect }) => {
				const pattern = new RegExp(`var\\(--${weight.key}\\)`);

				expect(weight.cssVar).toMatch(pattern);
			});
		});
	}
});
