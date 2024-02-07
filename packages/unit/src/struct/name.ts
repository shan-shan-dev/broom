import { z } from "zod";

import type { NewType } from "./struct.d.ts";

/**
 * A struct to store any kind of a name, with access to schema, and methods related to its usage.
 */
export class Name implements NewType<string> {
	public static LENGTH_MIN = 1 as const;
	public static LENGTH_MAX = 255 as const;

	/**
	 * Zod default schema, to parse **without** instantiation _(without transformation)_.
	 */
	public static schema() {
		return z.string().min(Name.LENGTH_MIN).max(Name.LENGTH_MAX);
	}

	/**
	 * Check if the provided value will be valid to create an instance.
	 * @param value - base to create enum value from
	 */
	public static isValid(value: string): value is string {
		return Name.schema().safeParse(value).success;
	}

	/** Zod extended schema, to parse **with** instantiation _(with transformation)_. */
	public static extendedSchema() {
		return Name.schema()
			.transform((v) => new Name(v))
			.or(z.instanceof(Name));
	}

	protected value: string;

	constructor(value: string) {
		this.value = Name.schema().parse(value);
	}

	public toString() {
		return this.value;
	}

	public valueOf() {
		return this.value;
	}
}
