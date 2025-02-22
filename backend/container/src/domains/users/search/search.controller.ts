import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import { searchUsersQuery, type SearchUsersResponse } from './search.types'
import { searchUsersService } from './search.service'
import { HttpRequest } from '@/types/http'

export const searchUsersController: ControllerFn<SearchUsersResponse> =
	async (req: HttpRequest) => {
		const query = validate(searchUsersQuery, req.query)
		const users = await searchUsersService(query)

		return success({
			message: 'Users found successfully',
			data: { users },
		})
	}
