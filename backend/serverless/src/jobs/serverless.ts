import {
	createServerlessConfig,
	createServerlessFunctionsConfig,
	serverlessConfig,
} from '../shared/serverless.shared'

const jobs = createServerlessFunctionsConfig({
	'example-job': {
		handler: 'example-job/index.handler',
		timeout: 900,
		memorySize: 10240,
	},
})

export const jobsServerless = createServerlessConfig({
	service: 'jobs',
	provider: {
		...serverlessConfig,
	},
	functions: {
		...jobs,
	},
})
