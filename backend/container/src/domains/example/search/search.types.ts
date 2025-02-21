import { z } from 'zod'

export const searchQuery = z.object({
	filter: z.string().optional().describe('Search filter text'),
	limit: z.coerce
		.number()
		.min(1)
		.max(100)
		.optional()
		.describe('Number of results per page'),
	page: z.coerce.number().min(1).optional().describe('Page number'),
})

export type SearchQuery = z.infer<typeof searchQuery>

export type SearchResponse = {
	message: string
	data: {
		query: SearchQuery
	}
}
