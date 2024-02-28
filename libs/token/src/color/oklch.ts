/**
 * Shared parent class for every OKLCH value
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch#values}
 */
export class OklchValue<N extends number, U extends string> {
	public value: N;
	public unit: U;

	constructor(value: N, unit: U) {
		this.value = value;
		this.unit = unit;
	}

	public get css() {
		return this.toString();
	}

	public toString() {
		return `${this.value}${this.unit}` as const;
	}
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch#l}
 */
export class Lightness<N extends number> extends OklchValue<N, "%"> {
	constructor(value: N) {
		super(value, "%");
	}
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch#c}
 */
export class Chroma<N extends number> extends OklchValue<N, "%"> {
	constructor(value: N) {
		super(value, "%");
	}
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/hue}
 */
export class Hue<N extends number> extends OklchValue<N, "deg"> {
	constructor(value: N) {
		super(value, "deg");
	}
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/alpha-value}
 */
export class Alpha<N extends number> extends OklchValue<N, "%"> {
	constructor(value: N) {
		super(value, "%");
	}
}

export interface OklchData<L extends number, C extends number, H extends number, A extends number> {
	l: L;
	c: C;
	h: H;
	a: A;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch}
 */
export class Oklch<L extends number, C extends number, H extends number, A extends number> {
	public lightness: Lightness<L>;
	public chroma: Chroma<C>;
	public hue: Hue<H>;
	public alpha: Alpha<A>;

	constructor(data: OklchData<L, C, H, A>) {
		const { l, c, h, a } = data;

		this.lightness = new Lightness(l);
		this.chroma = new Chroma(c);
		this.hue = new Hue(h);
		this.alpha = new Alpha(a);
	}

	/*
	 * Get the string of CSS function representation.
	 */
	public get css() {
		return `oklch(${this.lightness.css} ${this.chroma.css} ${this.hue.css} / ${this.alpha.css})` as const;
	}
}
