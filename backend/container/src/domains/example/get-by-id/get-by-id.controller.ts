import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import {
	getByIdParams,
	type GetByIdResponse,
} from '@/domains/example/get-by-id/get-by-id.types'

export const getByIdController: ControllerFn<GetByIdResponse> = async (req) => {
	const params = validate(getByIdParams, req.params)

	return success({
		message: 'Get by ID successful',
		data: { params },
	})
}
