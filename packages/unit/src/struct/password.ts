import { faker } from "@faker-js/faker";
import { getRandomInteger } from "@packages/util/random";
import { z } from "zod";

import type { NewType } from "./struct.d.ts";

export type PasswordType = Password | string;

export class Password implements NewType<string> {
	/** @see {@link https://bitwarden.com/blog/how-long-should-my-password-be} */
	public static MIN = 16 as const;
	/** @see {@link https://bitwarden.com/blog/how-long-should-my-password-be} */
	public static MAX = 128 as const;

	/**
	 * Zod default schema, to parse **without** instantiation _(without transformation)_.
	 */
	public static schema() {
		return z
			.string()
			.min(Password.MIN)
			.max(Password.MAX)
			.regex(/.*[A-Z].*/, "Password must contain atleast one uppercase character")
			.regex(/.*[a-z].*/, "Password must contain atleast one lowercase character")
			.regex(/.*\d.*/, "Password must contain atleast one number")
			.regex(/.*[!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-].*/, "Password must contain at least one special character");
	}

	/**
	 * Quickly check if the provided value meets the password schema.
	 * @param value - the value to check
	 */
	static isValid(value: unknown): value is string {
		return Password.schema().safeParse(value).success;
	}

	/** Zod extended schema, to parse **with** instantiation _(with transformation)_. */
	public static extendedSchema() {
		return Password.schema()
			.transform((v) => new Password(v))
			.or(z.instanceof(Password));
	}

	/**
	 * Generate a random password with `faker`.
	 * NOTE: Every generated password will have a prefix "Aut0!"
	 */
	static random(): Password {
		const value = faker.internet.password({
			length: getRandomInteger({ min: Password.MIN, max: Password.MAX }),
			memorable: false,
			prefix: "Aut0!",
		});

		return new Password(value);
	}

	#value: string;

	constructor(value: string) {
		this.#value = Password.schema().parse(value);
	}

	/** WARN: Dangerous action! */
	public reveal() {
		return this.#value;
	}

	public toString() {
		return "*".repeat(this.#value.length);
	}

	public valueOf() {
		return this.toString();
	}
}
