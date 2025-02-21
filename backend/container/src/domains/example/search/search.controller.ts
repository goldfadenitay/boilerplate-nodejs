import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import { zodToOpenAPI } from '@/utils/zod-to-openapi'
import {
	searchQuery,
	type SearchResponse,
} from '@/domains/example/search/search.types'
import { HttpRequest } from '@/types/http'

export const searchControllerMetadata = {
	query: zodToOpenAPI(searchQuery),
	responses: {
		200: {
			description: 'Search results',
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							message: { type: 'string' },
							data: {
								type: 'object',
								properties: {
									query: zodToOpenAPI(searchQuery),
								},
							},
						},
					},
				},
			},
		},
	},
}

export const searchController: ControllerFn<SearchResponse> = Object.assign(
	async (req: HttpRequest) => {
		const validatedQuery = validate(searchQuery, {
			filter: req.query['filter'],
			limit: Number(req.query['limit'])
				? Number(req.query['limit'])
				: req.query['limit'],
			page: Number(req.query['page'])
				? Number(req.query['page'])
				: req.query['page'],
		})

		return success({
			message: 'Search successful',
			data: { query: validatedQuery },
		})
	},
	searchControllerMetadata,
)
