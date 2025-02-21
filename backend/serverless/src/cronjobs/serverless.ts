import {
	createServerlessConfig,
	createServerlessFunctionsConfig,
	serverlessConfig,
} from '../shared/serverless.shared'

const cronJobs = createServerlessFunctionsConfig({
	'example-cronjob': {
		handler: 'example-cronjob/index.handler',
		timeout: 900,
		memorySize: 10240,
		events: [
			{
				schedule: 'cron(0 9 * * ? *)',
			},
		],
	},
})

export const cronJobsServerless = createServerlessConfig({
	service: 'cronJobs',
	provider: {
		...serverlessConfig,
	},
	functions: {
		...cronJobs,
	},
})
