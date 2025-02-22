import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('GET /api/example/:id', () => {
	it('should return 200 with valid ID', async () => {
		const response = await request(app).get('/api/example/123')

		expect(response.status).toBe(200)
		expect(response.body).toEqual({
			message: 'Get by ID successful',
			data: { params: { id: '123' } },
		})
	})

	it('should return 404 when accessing endpoint without ID', async () => {
		const response = await request(app).get('/api/example/')

		expect(response.status).toBe(404)
		expect(response.body).toEqual({})
	})
})
