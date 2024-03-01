import type { CSSDec, CSSVar, DesignToken } from "../main.js";

export type GridWidthKey = (typeof GridWidth.KEYS)[number];
type PrefixedKey<K extends GridWidthKey> = `grid-width-${K}`;

type Val = number;

/**
 * Design token keys for the grid width.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width}
 */
export class GridWidth<K extends GridWidthKey, V extends Val> implements DesignToken<PrefixedKey<K>, V> {
	/**
	 * Available design token keys for the grid width.
	 */
	static KEYS = ["min", "max"] as const;

	public key: PrefixedKey<K>;
	public value: V;

	constructor(key: K, value: V) {
		this.key = `grid-width-${key}`;
		this.value = value;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get cssDec(): CSSDec<PrefixedKey<K>, V> {
		return `${this.cssCustomProperty}:${this.value}`;
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
