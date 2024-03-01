import { calculateClamp } from "utopia-core";
import { FLUID_CONFIG, type FluidClamp } from "./fluid.js";
import type { CSSDec, CSSVar, DesignToken } from "./main.js";

export type SpaceKey = (typeof Space.KEYS)[number];
type PrefixedKey<K extends SpaceKey> = `space-${K}`;

type SpaceMin = number;
type SpaceMax = number;
type Val<Min extends SpaceMin = number, Max extends SpaceMax = number> = [Min, Max];

/**
 * Design token keys for the space.
 * NOTE: It can be used for padding, margin, gap, and other CSS properties which would create a space.
 */
export class Space<K extends SpaceKey, V extends Val> implements DesignToken<PrefixedKey<K>, V> {
	/**
	 * Available design token keys for the space.
	 */
	public static KEYS = ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl"] as const;

	public key: PrefixedKey<K>;
	public value: V;

	constructor(key: K, value: V) {
		this.key = `space-${key}`;
		this.value = value;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	/**
	 * Get the CSS clamp function for calculating the value for this space token.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/clamp}
	 */
	public get clamp() {
		const [minSize, maxSize] = this.value;

		return calculateClamp({
			...FLUID_CONFIG,
			minSize,
			maxSize,
		}) as FluidClamp;
	}

	public get cssDec(): CSSDec<PrefixedKey<K>, FluidClamp> {
		return `${this.cssCustomProperty}:${this.clamp}`;
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

/**
 * Design tokens related to spacing system.
 */
export const SPACE = {
	"3xs": new Space("3xs", [5, 5]),
	"2xs": new Space("2xs", [9, 10]),
	xs: new Space("xs", [14, 15]),
	s: new Space("s", [18, 20]),
	m: new Space("m", [27, 30]),
	l: new Space("l", [36, 40]),
	xl: new Space("xl", [54, 60]),
	"2xl": new Space("2xl", [72, 80]),
	"3xl": new Space("3xl", [108, 120]),
} as const;
