import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import {
	getByIdParams,
	type GetByIdResponse,
} from '@/domains/example/get-by-id/get-by-id.types'
import { zodToOpenAPI } from '@/utils/zod-to-openapi'
import { HttpRequest } from '@/types/http'

export const getByIdControllerMetadata = (() => {
	const params = zodToOpenAPI(getByIdParams)
	return {
		params: params,
		responses: {
			200: {
				description: 'Successful response',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								message: { type: 'string' },
								data: {
									type: 'object',
									properties: { params },
								},
							},
						},
					},
				},
			},
		},
	}
})()

export const getByIdController: ControllerFn<GetByIdResponse> = Object.assign(
	async (req: HttpRequest) => {
		const params = validate(getByIdParams, req.params)

		return success({
			message: 'Get by ID successful',
			data: { params },
		})
	},
	getByIdControllerMetadata,
)
