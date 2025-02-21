import { cronJobsServerless } from './src/cronjobs/serverless'
import { endpointsServerless } from './src/endpoints/serverless'
import { jobsServerless } from './src/jobs/serverless'

module.exports = {
	service: 'serverless-service',
	provider: {
		name: 'aws',
		runtime: 'nodejs18.x',
		region: 'us-east-2',
	},
	plugins: ['serverless-plugin-typescript'],
	functions: {
		...cronJobsServerless,
		...endpointsServerless,
		...jobsServerless,
	},
}
