import { z } from 'zod'
import { User } from '../users.types'

export const searchUsersQuery = z.object({
	role: z.string().optional(),
	status: z.string().optional(),
})

export type SearchUsersQuery = z.infer<typeof searchUsersQuery>

export interface SearchUsersResponse {
	message: string
	data: {
		users: User[]
	}
}
