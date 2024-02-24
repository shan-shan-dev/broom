import type { CSSVar, CSSVarDef, DesignToken } from "../main.js";
import type { FontFamilyKey } from "./font-family.js";

export type FontWeightKey = `${FontFamilyKey}-weight-${(typeof FontWeight.KEYS)[number]}`;

export class FontWeight implements DesignToken<FontWeightKey, number> {
	/**
	 * Available design token keys for the font eight.
	 */
	static KEYS = ["thin", "light", "regular", "medium", "bold", "black"] as const;

	public key: FontWeightKey;
	public value: number;

	constructor(key: FontWeightKey, value: number) {
		this.key = key;
		this.value = value;
	}

	public get cssVarDef(): CSSVarDef {
		return `--${this.key}:${this.value}`;
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

export const FontMonoWeightRegular = new FontWeight("font-mono-weight-regular", 400);
export const FontMonoWeightBold = new FontWeight("font-mono-weight-bold", 700);

export const FontSansWeightThin = new FontWeight("font-sans-weight-thin", 100);
export const FontSansWeightLight = new FontWeight("font-sans-weight-light", 300);
export const FontSansWeightRegular = new FontWeight("font-sans-weight-regular", 400);
export const FontSansWeightMedium = new FontWeight("font-sans-weight-medium", 500);
export const FontSansWeightBold = new FontWeight("font-sans-weight-bold", 700);
export const FontSansWeightBlack = new FontWeight("font-sans-weight-black", 900);

export const FontSerifWeightThin = new FontWeight("font-serif-weight-thin", 100);
export const FontSerifWeightLight = new FontWeight("font-serif-weight-light", 300);
export const FontSerifWeightRegular = new FontWeight("font-serif-weight-regular", 400);
export const FontSerifWeightMedium = new FontWeight("font-serif-weight-regular", 500);
export const FontSerifWeightBold = new FontWeight("font-serif-weight-bold", 700);
export const FontSerifWeightBlack = new FontWeight("font-serif-weight-black", 900);
