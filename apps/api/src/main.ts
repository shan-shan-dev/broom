import { loadConfig } from "@packages/config";

import { createServer } from "./server.js";

async function main() {
	const config = await loadConfig();
	const server = await createServer(config);

	server.listen({ port: config.API_PORT }, (err) => {
		if (err) {
			server.log.error({ err }, "An unhandled error occurred while server listen");
			process.exit(1);
		}
	});
}

await main();
