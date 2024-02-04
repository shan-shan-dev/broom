import { afterAll, describe, expect, test, vi } from "vitest";

import { LOG_LEVELS, log } from "./main.js";

describe("log", () => {
	const message = "this is a test";

	for (const level of LOG_LEVELS) {
		const logMock = vi.spyOn(log, level).mockImplementation(() => {});

		test(`.${level}("${message}") - call succeed`, () => {
			log[level](message);
			expect(logMock).toHaveBeenCalledOnce();
			expect(logMock).toHaveBeenLastCalledWith(message);
		});

		afterAll(() => {
			logMock.mockReset();
		});
	}
});
