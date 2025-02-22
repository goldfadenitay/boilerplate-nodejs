import { z } from 'zod'
import { User } from '../users.types'

export const createUserBody = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	role: z.string().min(1),
})

export type CreateUserBody = z.infer<typeof createUserBody>

export interface CreateUserResponse {
	message: string
	data: {
		user: User
	}
}
