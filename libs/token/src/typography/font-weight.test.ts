import { describe, it } from "vitest";
import { typedObjectEntries } from "@libs/util/object";

import { FONT } from "./font.js";

describe("FontWeight", () => {
	for (const weights of [FONT.mono.weight, FONT.sans.weight, FONT.serif.weight]) {
		for (const [_weight, instance] of typedObjectEntries(weights)) {
			describe(instance.toString(), () => {
				it("get `cssVarDef` - returns correctly the CSS variable definition", ({ expect }) => {
					const pattern = new RegExp(`${instance.key}:${instance.value}`);

					expect(instance.cssVarDef).toMatch(pattern);
				});

				it("get `cssVarDef` - returns correctly the CSS variable", ({ expect }) => {
					const pattern = new RegExp(`var\\(--${instance.key}\\)`);

					expect(instance.cssVar).toMatch(pattern);
				});
			});
		}
	}
});
