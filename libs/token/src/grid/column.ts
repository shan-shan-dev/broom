import type { CSSDec, CSSVar, DesignToken } from "../main.js";

type Key = "grid-column";
type Val = number;

/**
 * Design token key for the grid columns count.
 * TODO: Needs rethinking.
 * This design token key purpose is to help specify how many columns we want to claim from the grid.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column}
 */
export class GridColumn<V extends Val> implements DesignToken<Key, V> {
	public key: Key;
	public value: V;

	constructor(value: V) {
		this.key = "grid-column";
		this.value = value;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get cssDec(): CSSDec<Key, V> {
		return `${this.cssCustomProperty}:${this.value}`;
	}

	public get cssVar(): CSSVar<Key> {
		return `var(--${this.key})`;
	}

	public valueOf() {
		return this.value;
	}

	public toString() {
		return this.key;
	}
}
