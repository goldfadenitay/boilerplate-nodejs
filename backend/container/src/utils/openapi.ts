import swaggerJsdoc from 'swagger-jsdoc'
import { Express, Request } from 'express'
import { createRequestLogger } from '@/utils/logger'
import { isDefined } from '@/utils/is-defined'

interface Route {
	path: string
	method: string
}

interface RouteLayer {
	route?: {
		path: string
		methods: Record<string, boolean>
		stack: any[]
	}
}

interface Layer extends RouteLayer {
	handle: any
	regexp: RegExp
	name?: string
}

interface OpenAPISpec {
	paths: Record<string, Record<string, any>>
	[key: string]: any
}

interface RouteMetadata extends Route {
	domain?: string | undefined
	params?: Record<string, any>
	query?: Record<string, any>
	body?: Record<string, any>
	responses?: Record<string, any>
}

function collectRoutes(stack: Layer[]): RouteMetadata[] {
	const routes: RouteMetadata[] = []

	stack.forEach((layer: Layer) => {
		const path = layer.route?.path
		const method = Object.keys(layer.route?.methods || {})[0]

		if (isDefined(path) && isDefined(method)) {
			// Extract controller metadata if available
			const openApiPath = path.replace(/:([^/]+)/g, '{$1}')
			const handler = layer.route?.stack?.[0]?.handle

			const metadata: RouteMetadata = {
				path: openApiPath,
				method,
				params: handler?.params,
				query: handler?.query,
				body: handler?.body,
				responses: handler?.responses,
			}
			routes.push(metadata)
		} else if (layer.name === 'router' && layer.handle?.stack) {
			const baseUrl = layer.regexp
				.toString()
				.replace('/^', '')
				.replace('\\/?(?=\\/|$)/i', '')
				.replace(/\\/g, '')

			// Extract domain name from path
			const domain = baseUrl.split('/').filter(Boolean)[1] // e.g., 'example' from '/api/example'

			const nestedRoutes = collectRoutes(layer.handle.stack).map((route) => ({
				...route,
				path: `${baseUrl}${route.path}`,
				domain,
			}))
			routes.push(...nestedRoutes)
		}
	})

	return routes
}

export const generateApiDocs = (app: Express) => {
	const logger = createRequestLogger({} as Request)

	try {
		const routes = collectRoutes(app._router.stack)
			.filter((r) => r.path && r.method)
			.sort((a, b) => (a.domain || '').localeCompare(b.domain || ''))

		const specs = swaggerJsdoc({
			definition: {
				openapi: '3.0.0',
				info: {
					title: 'API Documentation',
					version: '1.0.0',
				},
				servers: [
					{
						url: process.env['API_URL'] || 'http://localhost:3000',
						description: 'Local server',
					},
				],
				tags: [...new Set(routes.map((r) => r.domain))]
					.filter((domain): domain is string => Boolean(domain))
					.map((domain) => ({
						name: domain,
						description: `${domain} endpoints`,
					})),
			},
			apis: ['./src/domains/**/*.ts'],
		}) as OpenAPISpec

		// Add routes to specs with domain tags
		routes.forEach(
			({ path, method, domain, params, query, body, responses }) => {
				if (!specs.paths[path]) {
					specs.paths[path] = {}
				}

				console.log('body!', body)

				specs.paths[path][method] = {
					tags: domain ? [domain] : undefined,
					summary: `${method.toUpperCase()} ${path}`,
					parameters: [
						...(params && isDefined(params['properties'])
							? Object.entries(params['properties']).map(([name, schema]) => ({
									in: 'path',
									name,
									required: params['required']?.includes(name) ?? false,
									schema,
							  }))
							: []),
						...(query && isDefined(query['properties'])
							? Object.entries(query['properties']).map(([name, schema]) => ({
									in: 'query',
									name,
									required: query['required']?.includes(name) ?? false,
									schema,
							  }))
							: []),
					],
					...(body && {
						requestBody: {
							content: {
								'application/json': {
									schema: body,
								},
							},
						},
					}),
					responses: responses || {
						200: { description: 'Successful response' },
						400: { description: 'Bad request' },
						500: { description: 'Internal server error' },
					},
				}
			},
		)

		logger.info('API documentation generated successfully')
		return specs
	} catch (error) {
		logger.error('Failed to generate API documentation', error as Error)
		throw error
	}
}
