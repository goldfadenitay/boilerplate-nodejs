import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import { createBody, type CreateResponse } from './create.types'

export const createController: ControllerFn<CreateResponse> = async (req) => {
	const validatedBody = validate(createBody, req.body)

	return success({
		message: 'Create successful',
		data: { body: validatedBody },
	})
}
