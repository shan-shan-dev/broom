export interface ConnectionError {
	errno: number;
	code: "ECONNREFUSED";
	syscall: string;
	address: string;
	port: number;
}

export function isConnectionError(error: unknown): error is ConnectionError {
	return typeof error === "object" && error && "code" in error ? error.code === "ECONNREFUSED" : false;
}
