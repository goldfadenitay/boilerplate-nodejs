import { z } from 'zod'

export const createBody = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email format'),
	age: z
		.number()
		.int('Age must be an integer')
		.min(18, 'Must be at least 18 years old'),
})

export type CreateBody = z.infer<typeof createBody>

export type CreateResponse = {
	message: string
	data: {
		body: CreateBody
	}
}
