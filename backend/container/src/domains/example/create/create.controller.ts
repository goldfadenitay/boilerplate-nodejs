import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import { createBody, type CreateResponse } from './create.types'
import { HttpRequest } from '@/types/http'

export const createController: ControllerFn<CreateResponse> =
	async (req: HttpRequest) => {
		const body = validate(createBody, req.body)
		await new Promise((resolve) => setTimeout(resolve, 1))
		return success({
			message: 'Create successful',
			data: { body },
		})
	}
