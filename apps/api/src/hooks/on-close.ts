import { log } from "@packages/logger";
import closeWithGrace from "close-with-grace";
import type { onCloseAsyncHookHandler } from "fastify";

export const handleClose: onCloseAsyncHookHandler = async function close(instance) {
	const listener = closeWithGrace(
		{
			delay: instance.config.closeGraceDelay,
		},
		async (options) => {
			const { err, signal, manual } = options;

			if (manual) {
				log.warn("Closed manually.");
			}

			if (err) {
				log.fatal({ err }, "An unhandled error occurred while gracing shutdown.");
			}

			if (signal) {
				log.fatal({ signal }, "Process exited with signal");
			}

			await instance.close();
		},
	);

	listener.uninstall();
};
