import type { SearchUsersQuery } from './search.types'
import type { User } from '../users.types'
import { searchUsers } from '../users.service'

export const searchUsersService = async (
	query: SearchUsersQuery,
): Promise<User[]> => {
	const users = await searchUsers(query)
	return users
}
