import type { CSSVar, CSSVarDef, DesignToken } from "../main.js";

export type FontFamilyKey = `font-${(typeof FontFamily.KEYS)[number]}`;

// TODO: Add fallbacks

/**
 * Design token keys for the font family.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
 */
export class FontFamily implements DesignToken<FontFamilyKey, string> {
	/**
	 * Available design token keys for the font family.
	 */
	public static KEYS = ["mono", "sans", "serif"] as const;

	public key: FontFamilyKey;
	public value: string;

	constructor(key: FontFamilyKey, value: string) {
		this.key = key;
		this.value = value;
	}

	public get cssVarDef(): CSSVarDef {
		return `--${this.key}:${this.value}`;
	}

	public get cssVar(): CSSVar {
		return `var(--${this.key})`;
	}

	public valueOf() {
		return this.value;
	}

	public toString() {
		return this.key;
	}
}

export const FontMono = new FontFamily("font-mono", "Noto Sans Mono");
export const FontSans = new FontFamily("font-sans", "Noto Sans TC");
export const FontSerif = new FontFamily("font-serif", "Noto Serif TC");
