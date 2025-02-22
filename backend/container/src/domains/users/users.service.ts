import { faker } from '@faker-js/faker'
import type { User } from './users.types'
import type { SearchUsersQuery } from './search/search.types'
import type { CreateUserBody } from './create/create.types'

export const searchUsers = async (params: SearchUsersQuery): Promise<User[]> => {
		const { role, status } = params
		await new Promise((resolve) => setTimeout(resolve, 0))
		return Array.from({ length: 5 }, () => ({
			id: faker.string.uuid(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			role: role || faker.person.jobType(),
			status:
				(status as 'active' | 'inactive') ||
				faker.helpers.arrayElement(['active', 'inactive']),
			avatar: faker.image.avatar(),
			lastLogin: faker.date.recent(),
		department: faker.commerce.department(),
	}))
}



	export const createUser = async (data: CreateUserBody): Promise<User> => {
		await new Promise((resolve) => setTimeout(resolve, 1))
		return {
			id: faker.string.uuid(),
			name: data.name,
			email: data.email,
			role: data.role,
			status: 'active',
		avatar: faker.image.avatar(),
		lastLogin: faker.date.recent(),
		department: faker.commerce.department(),
	}
}
