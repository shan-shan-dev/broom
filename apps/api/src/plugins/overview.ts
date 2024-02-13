import Overview, { type FastifyOverviewOptions } from "fastify-overview";
import OverviewUI from "fastify-overview-ui";
import plugin from "fastify-plugin";

import { type APIServerConfig, getAPIServerURL } from "../server.js";

const OVERVIEW_PATHNAME = "/fastify-overview-ui";
const OPTIONS = {
	exposeRoute: true,
	exposeRouteOptions: {
		method: "POST",
		// url: OVERVIEW_PATHNAME,
	},
} as const satisfies FastifyOverviewOptions;

export default plugin<FastifyOverviewOptions>(async (fastify, _options) => {
	const { config } = fastify;
	const overviewURL = getAPIOverviewURL(config);
	fastify.log.info(`API server overview URL is: ${overviewURL}/`);

	fastify.register(Overview, OPTIONS);
	fastify.register(OverviewUI);
});

function getAPIOverviewURL(config: APIServerConfig): URL {
	const url = getAPIServerURL(config);

	url.pathname = OVERVIEW_PATHNAME;

	return url;
}
