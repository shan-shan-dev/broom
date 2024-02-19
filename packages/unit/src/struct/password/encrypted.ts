import { log } from "@packages/logger";
import bcrypt from "bcrypt";
import { z } from "zod";

import type { NewType } from "../struct.d.ts";
import type { Password } from "./index.js";

/** A better string type for the encrypted password format. */
export type StringifiedEncryptedPassword =
	`${(typeof EncryptedPassword)["HASH_ALGORITHM_IDENTIFIER"]}$${(typeof EncryptedPassword)["SALT_ROUNDS"]}$${string}`;

/** @see {@link EncryptedPassword} */
export type EncryptedPasswordType = StringifiedEncryptedPassword | EncryptedPassword;

/**
 * A struct for the **encrypted** password, with access to schema, and methods related to its usage.
 */
export class EncryptedPassword implements NewType<StringifiedEncryptedPassword> {
	/**
	 * Length of the hashed password.
	 * @see {@link https://blog.logrocket.com/password-hashing-node-js-bcrypt#node-js-bcyrpt-password-hashing-information}
	 */
	public static LENGTH = 60 as const;

	/**
	 * Optimal password hashing cost.
	 * WARN: Do not set longer than 10 if we don't want to exceed 100ms.
	 * @see {@link https://blog.logrocket.com/password-hashing-node-js-bcrypt#password-hashing-data-costs}
	 */
	public static SALT_ROUNDS = 10 as const;

	/**
	 * Bcrypt hash algorithm identifier.
	 * @see {@link https://www.npmjs.com/package/bcrypt#hash-info}
	 */
	public static HASH_ALGORITHM_IDENTIFIER = "2b" as const;

	/**
	 * Zod default schema, to parse **without** instantiation _(without transformation)_.
	 */
	public static schema() {
		return z
			.string()
			.length(EncryptedPassword.LENGTH)
			.startsWith(`$${EncryptedPassword.HASH_ALGORITHM_IDENTIFIER}$${EncryptedPassword.SALT_ROUNDS}$`);
	}

	/** Zod extended schema, to parse **with** instantiation _(with transformation)_. */
	public static extendedSchema() {
		return EncryptedPassword.schema()
			.transform((v) => new EncryptedPassword(v))
			.or(z.instanceof(EncryptedPassword));
	}

	/**
	 * Quickly check if the provided value meets encrypted the password schema.
	 * @param value - the value to check
	 */
	public static isValid(value: unknown): value is StringifiedEncryptedPassword {
		return EncryptedPassword.schema().safeParse(value).success;
	}

	/**
	 * Create encrypted password from a password.
	 * @param password - supported instance
	 * @see {@link Password}
	 */
	public static async from(password: Password): Promise<EncryptedPassword> {
		try {
			const salt = await bcrypt.genSalt(EncryptedPassword.SALT_ROUNDS);
			const encrypted = await bcrypt.hash(password.reveal(), salt);

			return new EncryptedPassword(encrypted);
		} catch (error) {
			log.fatal({ error }, "There was an issue with hashing a password!");
			throw error;
		}
	}

	#value: StringifiedEncryptedPassword;

	constructor(value: StringifiedEncryptedPassword | string) {
		this.#value = EncryptedPassword.schema().parse(value) as StringifiedEncryptedPassword;
	}

	/**
	 * Check if the encrypted password is a match with a non-encrypted one.
	 * @param password - non-encrypted password to compare with
	 */
	public async isMatch(password: Password): Promise<boolean> {
		try {
			return await bcrypt.compare(password.reveal(), this.#value);
		} catch (error) {
			log.fatal({ error }, "There was an issue with comparison!");
			throw error;
		}
	}

	public toString() {
		return this.#value;
	}

	public valueOf() {
		return this.#value;
	}
}
