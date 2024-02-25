import { calculateClamp } from "utopia-core";

import { FLUID_CONFIG } from "../fluid.js";
import type { CSSVar, CSSVarDef, DesignToken } from "../main.js";

export type FontSizeKey = (typeof FontSize.KEYS)[number];
type PrefixedKey<K extends FontSizeKey> = `font-size-${K}`;

type FontSizeMin = number;
type FontSizeMax = number;
type Val<Min extends FontSizeMin = number, Max extends FontSizeMax = number> = [Min, Max];

type Clamp = `clamp(${number}rem, ${number}rem + ${number}cqi, ${number}rem)`;

/**
 * Design token keys for the font size.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size}
 */
export class FontSize<K extends FontSizeKey, Min extends FontSizeMin, Max extends FontSizeMax>
	implements DesignToken<PrefixedKey<K>, Val<Min, Max>>
{
	/**
	 * Available design token keys for the font size.
	 */
	static KEYS = ["5xl", "4xl", "3xl", "2xl", "xl", "l", "m", "s", "xs"] as const;

	public key: PrefixedKey<K>;
	public value: Val<Min, Max>;

	constructor(key: K, value: Val<Min, Max>) {
		this.key = `font-size-${key}`;
		this.value = value;
	}

	public get clamp(): Clamp {
		const [minSize, maxSize] = this.value;

		return calculateClamp({
			...FLUID_CONFIG,
			minSize,
			maxSize,
		}) as Clamp;
	}

	public get cssVarDef(): CSSVarDef<PrefixedKey<K>, Clamp> {
		return `--${this.key}:${this.clamp}`;
	}

	public get cssVar(): CSSVar<PrefixedKey<K>> {
		return `var(--${this.key})`;
	}

	public toString() {
		return this.key;
	}

	public valueOf() {
		return this.value;
	}
}
