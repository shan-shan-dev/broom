import type { CSSVar, CSSVarDef, DesignToken } from "../main.js";
import type { FontFamilyKey } from "./font-family.js";

export type FontWeightKey = (typeof FontWeight.KEYS)[number];
type PrefixedKey<F extends FontFamilyKey, K extends FontWeightKey> = `font-${F}-weight-${K}`;

type Val = number;

/**
 * Design token keys for the font weight.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight}
 */
export class FontWeight<F extends FontFamilyKey, K extends FontWeightKey, V extends Val>
	implements DesignToken<PrefixedKey<F, K>, V>
{
	/**
	 * Available design token keys for the font weight.
	 */
	static KEYS = ["light", "regular", "medium", "bold", "black"] as const;

	public key: PrefixedKey<F, K>;
	public value: V;

	constructor(family: F, key: K, value: V) {
		this.key = `font-${family}-weight-${key}`;
		this.value = value;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get cssVarDef(): CSSVarDef<PrefixedKey<F, K>, V> {
		return `${this.cssCustomProperty}:${this.value}`;
	}

	public get cssVar(): CSSVar<PrefixedKey<F, K>> {
		return `var(--${this.key})`;
	}

	public toString() {
		return this.key;
	}

	public valueOf() {
		return this.value;
	}
}
