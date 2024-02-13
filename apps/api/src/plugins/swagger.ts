import Swagger, { type FastifyDynamicSwaggerOptions, type FastifySwaggerOptions } from "@fastify/swagger";
import SwaggerUI, { type FastifySwaggerUiOptions } from "@fastify/swagger-ui";
import plugin from "fastify-plugin";

import rootPkg from "../../../../package.json";
import pkg from "../../package.json";
import { type APIServerConfig, getAPIServerURL } from "../server.js";

const DOCUMENTATION_PATHNAME = "/docs";

export const TAG = {
	// TODO: Add swagger tags here
} as const;

const OPTIONS = {
	hideUntagged: false,
	mode: "dynamic",
	openapi: {
		openapi: "3.1.0",
		info: {
			title: "API documentation",
			description: `If you spot any bugs use the [Issue tracker on GitHub repository](${rootPkg.bugs})`,
			version: pkg.version,
		},
		components: {
			responses: {
				// TODO: Add generic default responses here...
			},
			schemas: {},
			securitySchemes: {
				// TODO: Setup auth
			},
		},
	},
} satisfies FastifyDynamicSwaggerOptions;

const UI_OPTIONS = {
	routePrefix: DOCUMENTATION_PATHNAME,
	uiConfig: {
		deepLinking: false,
	},
	staticCSP: true,
} satisfies FastifySwaggerUiOptions;

export default plugin<FastifySwaggerOptions>(async (fastify, _options, _error) => {
	const { config } = fastify;
	const docsURL = getAPIDocsURL(config);
	fastify.log.info(`API server documentation URL is: ${docsURL}`);

	fastify.register(Swagger, OPTIONS);
	fastify.register(SwaggerUI, UI_OPTIONS);

	// TODO: Add "global" schemas here
});

function getAPIDocsURL(config: APIServerConfig): URL {
	const url = getAPIServerURL(config);

	url.pathname = DOCUMENTATION_PATHNAME;

	return url;
}
