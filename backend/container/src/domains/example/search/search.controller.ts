import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import { zodToOpenAPI } from '@/utils/zod-to-openapi'
import {
	searchQuery,
	type SearchResponse,
} from '@/domains/example/search/search.types'
import { HttpRequest } from '@/types/http'

export const searchControllerMetadata = (() => {
	const query = zodToOpenAPI(searchQuery)
	return {
		query,
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
										query,
									},
								},
							},
						},
					},
				},
			},
		},
	}
})()

export const searchController: ControllerFn<SearchResponse> = Object.assign(
	async (req: HttpRequest) => {
		const query = validate(searchQuery, req.query)

		return success({
			message: 'Search successful',
			data: { query },
		})
	},
	searchControllerMetadata,
)
