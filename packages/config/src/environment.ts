/**
 * @see {@link https://blog.platformatic.dev/handling-environment-variables-in-nodejs#heading-what-is-nodeenv}
 */
export const ENVIRONMENTS = ["development", "test", "production", "staging"] as const;

/**
 * @see {@link ENVIRONMENTS}
 */
export type Environment = (typeof ENVIRONMENTS)[number];
