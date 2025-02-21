import { describe, it, expect } from 'vitest'
import { createController } from '@/domains/example/create/create.controller'
import { HttpRequest } from '@/types/http'

describe('createController', () => {
	it('should return success response with valid body', async () => {
		const validBody = {
			name: 'John Doe',
			email: 'john@example.com',
			age: 25,
		}

		const request: HttpRequest = {
			params: {},
			query: {},
			body: validBody,
			headers: {},
		}

		const response = await createController(request)

		expect(response.statusCode).toBe(200)
		expect(response.body).toEqual({
			message: 'Create successful',
			data: { body: validBody },
		})
	})
})
