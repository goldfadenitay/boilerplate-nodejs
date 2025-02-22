import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import {
	searchQuery,
	type SearchResponse,
} from '@/domains/example/search/search.types'
import { HttpRequest } from '@/types/http'

export const searchController: ControllerFn<SearchResponse> =
	async (req: HttpRequest) => {
		const query = validate(searchQuery, req.query)

		await new Promise((resolve) => setTimeout(resolve, 1))
		return success({
			message: 'Search successful',
			data: { query },
		})
	}
