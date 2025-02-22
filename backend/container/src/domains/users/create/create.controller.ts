import { ControllerFn } from '@/types/controller'
import { created } from '@/utils/response'
import { validate } from '@/utils/validation'
import { createUserBody, type CreateUserResponse } from './create.types'
import { createUserService } from './create.service'
import { HttpRequest } from '@/types/http'

export const createUserController: ControllerFn<CreateUserResponse> =
	async (req: HttpRequest) => {
		const body = validate(createUserBody, req.body)
		const user = await createUserService.execute(body)

		return created({
			message: 'User created successfully',
			data: { user },
		})
	}
