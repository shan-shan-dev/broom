import { loadConfig } from "@packages/config";

import { handleClose } from "./hooks/on-close.js";
import { handleReady } from "./hooks/on-ready.js";
import { createServer } from "./server.js";

async function main() {
	const config = await loadConfig();
	const server = await createServer(config);

	server.addHook("onClose", handleClose);
	server.addHook("onReady", handleReady);

	server.listen({ port: config.API_PORT }, (err) => {
		if (err) {
			server.log.error({ err }, "An unhandled error occurred while server listen");
			process.exit(1);
		}
	});
}

await main();
