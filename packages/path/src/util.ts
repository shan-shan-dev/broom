export type AbsolutePath = `/${string}`;

/** Check if the provided path as string is an absolute path. */
export function isAbsolutePath(path: string): path is AbsolutePath {
	return path.startsWith("/");
}

/**
 * Wrap an **absolute** path with URL, starting with `file:/` protocol,
 * to create a clickable link in the terminals, which supports it.
 */
export function pathToURL(path: AbsolutePath): URL {
	return new URL(`file://${path}`);
}
