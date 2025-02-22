import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import {
	getByIdParams,
	type GetByIdResponse,
} from '@/domains/example/get-by-id/get-by-id.types'
import { HttpRequest } from '@/types/http'

export const getByIdController: ControllerFn<GetByIdResponse> =
	async (req: HttpRequest) => {
		const params = validate(getByIdParams, req.params)
		await new Promise((resolve) => setTimeout(resolve, 1))
		return success({
			message: 'Get by ID successful',
			data: { params },
		})
	}
