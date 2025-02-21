import { z } from 'zod'

export const getByIdParams = z.object({
	id: z.string().min(1, 'ID is required'),
})

export type GetByIdParams = z.infer<typeof getByIdParams>

export type GetByIdResponse = {
	message: string
	data: {
		params: GetByIdParams
	}
}
