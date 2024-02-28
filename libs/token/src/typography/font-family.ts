import type { CSSDec, CSSVar, DesignToken } from "../main.js";

export type FontFamilyKey = (typeof FontFamily.KEYS)[number];
type PrefixedKey<K extends FontFamilyKey> = `font-${K}`;

type Val = string;
type WrappedVal<V extends Val> = `"${V}"`;

// TODO: Add font fallbacks

/**
 * Design token keys for the font family.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
 */
export class FontFamily<K extends FontFamilyKey, V extends Val> implements DesignToken<PrefixedKey<K>, V> {
	/**
	 * Available design token keys for the font family.
	 */
	public static KEYS = ["mono", "sans", "serif"] as const;

	public key: PrefixedKey<K>;
	public value: V;

	constructor(key: K, value: V) {
		this.key = `font-${key}`;
		this.value = value;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get cssDec(): CSSDec<PrefixedKey<K>, WrappedVal<V>> {
		return `${this.cssCustomProperty}: "${this.value}"`;
	}

	public get cssVar(): CSSVar<PrefixedKey<K>> {
		return `var(--${this.key})`;
	}

	public valueOf() {
		return this.value;
	}

	public toString() {
		return this.key;
	}
}
