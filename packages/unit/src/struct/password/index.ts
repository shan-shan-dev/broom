import { faker } from "@faker-js/faker";
import { getRandomInteger } from "@packages/util/random";
import { z } from "zod";

import type { NewType } from "../struct.d.ts";

/** @see {@link Password} */
export type PasswordType = Password | string;

/**
 * A struct to store securely the password, with access to schema, and methods related to its usage.
 */
export class Password implements NewType<string> {
	/** @see {@link https://bitwarden.com/blog/how-long-should-my-password-be} */
	public static MIN = 16 as const;
	/** @see {@link https://bitwarden.com/blog/how-long-should-my-password-be} */
	public static MAX = 64 as const;

	/** Allowed special characters to use for password. */
	public static ALLOWED_SPECIAL_CHARACTERS = /[!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-]/;
	/** Disallowed special characters to use for password. */
	public static DISALLOWED_SPECIAL_CHARACTERS: RegExp | undefined = undefined;

	/**
	 * Zod default schema, to parse **without** instantiation _(without transformation)_.
	 */
	public static schema() {
		return (
			z
				.string()
				.min(Password.MIN)
				.max(Password.MAX)
				.regex(/[A-Z]/, "Password must contain atleast one uppercase character")
				.regex(/[a-z]/, "Password must contain atleast one lowercase character")
				.regex(/\d/, "Password must contain atleast one number")
				// biome-ignore lint/complexity/noThisInStatic: Child classes can override static.
				.regex(this.ALLOWED_SPECIAL_CHARACTERS, "Password must contain at least one special character")
				.refine(
					// biome-ignore lint/complexity/noThisInStatic: Child classes can override static.
					(v) => (this.DISALLOWED_SPECIAL_CHARACTERS ? !this.DISALLOWED_SPECIAL_CHARACTERS.test(v) : true),
					"Password shouldn't contain any disallowed special characters",
				)
		);
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
