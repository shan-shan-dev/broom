import { calculateClamp } from "utopia-core";
import { FLUID_CONFIG, type FluidClamp } from "../fluid.js";
import type { CSSDec, CSSVar, DesignToken } from "../main.js";

type GridWidthMin = number;
type GridWidthMax = number;
type Val<Min extends GridWidthMin = number, Max extends GridWidthMax = number> = [Min, Max];
type Key = "grid-gutter";

/**
 * Grid gutter is used to specify the gap between grid columns.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/gap}
 */
export class GridGutter<Min extends GridWidthMin, Max extends GridWidthMax> implements DesignToken<Key, Val<Min, Max>> {
	public key: Key;
	public value: Val<Min, Max>;

	constructor(value: Val<Min, Max>) {
		this.key = "grid-gutter";
		this.value = value;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get clamp(): FluidClamp {
		const [minSize, maxSize] = this.value;

		return calculateClamp({
			...FLUID_CONFIG,
			minSize,
			maxSize,
		}) as FluidClamp;
	}

	public get cssDec(): CSSDec<Key, FluidClamp> {
		return `${this.cssCustomProperty}:${this.clamp}`;
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
