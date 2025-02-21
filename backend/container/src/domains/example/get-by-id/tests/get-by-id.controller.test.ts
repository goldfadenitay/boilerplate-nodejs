import { describe, it, expect } from 'vitest'
import { getByIdController } from '@/domains/example/get-by-id/get-by-id.controller'
import { HttpRequest } from '@/types/http'

describe('getByIdController', () => {
	it('should return success response with valid params', async () => {
		const request: HttpRequest = {
			params: { id: '123' },
			query: {},
			body: {},
			headers: {},
		}

		const response = await getByIdController(request)

		expect(response.statusCode).toBe(200)
		expect(response.body).toEqual({
			message: 'Get by ID successful',
			data: { params: { id: '123' } },
		})
	})
})
