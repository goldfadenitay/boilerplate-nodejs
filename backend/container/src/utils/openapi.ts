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

function collectRoutes(stack: Layer[]): Route[] {
	const routes: Route[] = []

	stack.forEach((layer: Layer) => {
		const path = layer.route?.path
		const method = Object.keys(layer.route?.methods || {})[0]

		if (isDefined(path) && isDefined(method)) {
			routes.push({ path, method })
		} else if (layer.name === 'router' && layer.handle?.stack) {
			// Nested routes in routers (like from domains folder)

			const baseUrl = layer.regexp
				.toString()
				.replace('/^', '')
				.replace('\\/?(?=\\/|$)/i', '')
				.replace(/\\/g, '')

			const nestedRoutes = collectRoutes(layer.handle.stack).map((route) => ({
				path: `${baseUrl}${route.path}`,
				method: route.method,
			}))
			console.log('nestedRoutes------', nestedRoutes)
			routes.push(...nestedRoutes)
		}
	})

	return routes
}

export const generateApiDocs = (app: Express) => {
	const logger = createRequestLogger({} as Request)

	try {
		const routes = collectRoutes(app._router.stack).filter(
			(r) => r.path && r.method,
		)

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
			},
			apis: ['./src/domains/**/*.ts'], // Path to the API docs
		}) as OpenAPISpec

		// Add routes to specs
		routes.forEach(({ path, method }) => {
			if (!specs.paths[path]) {
				specs.paths[path] = {}
			}
			specs.paths[path][method] = {
				summary: `${method.toUpperCase()} ${path}`,
				responses: {
					200: {
						description: 'Successful response',
					},
					400: {
						description: 'Bad request',
					},
					500: {
						description: 'Internal server error',
					},
				},
			}
		})

		logger.info('API documentation generated successfully')
		return specs
	} catch (error) {
		logger.error('Failed to generate API documentation', error as Error)
		throw error
	}
}
