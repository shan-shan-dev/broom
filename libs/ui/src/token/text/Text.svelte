<script lang="ts">
	import { type FontFamilyKey } from "@libs/token/typography/font-family";
	import { type FontSizeKey } from "@libs/token/typography/font-size";
	import { type FontWeightKey } from "@libs/token/typography/font-weight";
	import { FONT } from "@libs/token/typography/font";

	export let family: FontFamilyKey = "sans";
	/**
	 * How large should the text be?
	 */
	export let size: FontSizeKey = "m";
	export let weight: FontWeightKey = family === "mono" ? "regular" : "medium";

	$: validatedWeight = () => {
		const validated = weight;
		validateFontWeight(family, validated);
		return validated;
	};

	function validateFontWeight(
		family: FontFamilyKey,
		weight: FontWeightKey,
	): asserts weight is keyof (typeof FONT)[typeof family]["weight"] {
		if (!Object.hasOwn(FONT[family].weight, weight)) {
			throw new TypeError(
				`This font-family: ${family} doesn't have weight: ${weight}`,
			);
		}
	}
</script>

<span
	class="text"
	style:--font-family={FONT[family].family.cssVar}
	style:--font-size={FONT.size[size].cssVar}
	style:--font-weight={FONT[family].weight[validatedWeight()].cssVar}
>
	{"Hello"}
</span>

<style>
	.text {
		font-family: var(--font-family);
	}
</style>
