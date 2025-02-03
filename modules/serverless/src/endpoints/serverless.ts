import {
	createServerlessConfig,
	createServerlessFunctionsConfig,
	serverlessConfig,
} from '../shared/serverless.shared'

const endpoints = createServerlessFunctionsConfig({
	'example-endpoint': {
		handler: 'example-endpoint/index.handler',
		timeout: 900,
		memorySize: 10240,
		events: [
			{
				httpApi: {
					method: 'GET',
					path: '/example-endpoint',
				},
			},
		],
	},
})

export const endpointsServerless = createServerlessConfig({
	service: 'endpoints',
	provider: {
		...serverlessConfig,
	},
	functions: {
		...endpoints,
	},
})
