import type { AWS } from '@serverless/typescript'

export const createServerlessConfig = <T extends AWS>(config: T) => config
export const createServerlessFunctionsConfig = <T extends AWS['functions']>(
	functions: T,
) => functions

export const serverlessConfig: AWS['provider'] = {
	name: 'aws',
}
