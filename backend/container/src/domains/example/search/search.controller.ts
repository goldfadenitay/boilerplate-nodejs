import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import {
	searchQuery,
	type SearchResponse,
} from '@/domains/example/search/search.types'

export const searchController: ControllerFn<SearchResponse> = async (req) => {
	const validatedQuery = validate(searchQuery, {
		filter: req.query['filter'],
		limit: req.query['limit'],
		page: req.query['page'],
	})

	return success({
		message: 'Search successful',
		data: { query: validatedQuery },
	})
}
