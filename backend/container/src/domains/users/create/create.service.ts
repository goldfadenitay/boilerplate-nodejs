import type { CreateUserBody } from './create.types'
import type { User } from '../users.types'
import { createUser } from '../users.service'

export const createUserService = {
	async execute(data: CreateUserBody): Promise<User> {
		const user = await createUser(data)
		return user
	},
}
