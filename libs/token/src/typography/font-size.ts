import { calculateClamp } from "utopia-core";

import { FLUID_CONFIG } from "../fluid.js";
import type { CSSVar, CSSVarDef, DesignToken } from "../main.js";

export type FontSizeKey = `font-size-${(typeof FontSize.KEYS)[number]}`;

type FontSizeMin = number;
type FontSizeMax = number;

export type FontSizeValue = [FontSizeMin, FontSizeMax];

type Clamp = `clamp(${number}rem, ${number}rem + ${number}cqi, ${number}rem)`;

export class FontSize implements DesignToken<FontSizeKey, FontSizeValue> {
	/**
	 * Available design token keys for the font size.
	 */
	static KEYS = ["5xl", "4xl", "3xl", "2xl", "xl", "l", "m", "s", "xs"] as const;

	public key: FontSizeKey;
	public value: FontSizeValue;

	constructor(key: (typeof FontSize.KEYS)[number], value: FontSizeValue) {
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

	public get cssVarDef(): CSSVarDef {
		return `--${this.key}:${this.clamp}`;
	}

	public get cssVar(): CSSVar {
		return `var(--${this.key})`;
	}

	public toString() {
		return this.key;
	}

	public valueOf() {
		return this.value;
	}
}

export const FontSize5XL = new FontSize("5xl", [53.75, 76.29]);
export const FontSize4XL = new FontSize("4xl", [44.79, 61.04]);
export const FontSize3XL = new FontSize("3xl", [37.32, 48.83]);
export const FontSize2XL = new FontSize("2xl", [31.1, 39.06]);
export const FontSizeXL = new FontSize("xl", [25.92, 31.25]);
export const FontSizeL = new FontSize("l", [21.6, 25.0]);
export const FontSizeM = new FontSize("m", [18.0, 20.0]);
export const FontSizeS = new FontSize("s", [15.0, 16.0]);
