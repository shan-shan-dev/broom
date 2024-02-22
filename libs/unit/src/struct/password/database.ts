import { Password } from "./index.js";

/**
 * A struct to store securely the **database** password,
 * with access to it's own schema, and methods related to its usage.
 */
export class DatabasePassword extends Password {
	/**
	 * Allowed special characters to respect PostgreSQL requirements:
	 * @see {@link https://www.reddit.com/r/PostgreSQL/comments/114276y/documentation_for_allowed_characters_in/}
	 */
	public static override ALLOWED_SPECIAL_CHARACTERS = /[!#$%&'()*+,.:;<=>?[\\\]^_`{|}~-]/;

	/**
	 * Disallowed special characters to respect PostgreSQL requirements:
	 * @see {@link https://www.reddit.com/r/PostgreSQL/comments/114276y/documentation_for_allowed_characters_in/}
	 */
	public static override DISALLOWED_SPECIAL_CHARACTERS = /[/"@]/;

	constructor(value: string) {
		super(DatabasePassword.schema().parse(value));
	}
}
