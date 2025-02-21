import { z } from 'zod'

export const searchQuery = z.object({
	filter: z.string().optional(),
	limit: z.coerce
		.number()
		.int('Limit must be an integer')
		.positive('Limit must be positive')
		.optional(),
	page: z.coerce
		.number()
		.int('Page must be an integer')
		.positive('Page must be positive')
		.optional(),
})

export type SearchQuery = z.infer<typeof searchQuery>

export type SearchResponse = {
	message: string
	data: {
		query: SearchQuery
	}
}
