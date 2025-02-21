import { ControllerFn } from '@/types/controller'
import { success } from '@/utils/response'
import { validate } from '@/utils/validation'
import { createBody, type CreateResponse } from './create.types'
import { zodToOpenAPI } from '@/utils/zod-to-openapi'
import { HttpRequest } from '@/types/http'

export const createControllerMetadata = (() => {
	const body = zodToOpenAPI(createBody)
	return {
		body,
		responses: {
			200: {
				description: 'Create successful',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								message: { type: 'string' },
								data: { type: 'object', properties: { body } },
							},
						},
					},
				},
			},
		},
	}
})()

export const createController: ControllerFn<CreateResponse> = Object.assign(
	async (req: HttpRequest) => {
		const body = validate(createBody, req.body)

		return success({
			message: 'Create successful',
			data: { body },
		})
	},
	createControllerMetadata,
)
