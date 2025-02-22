import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('GET /api/example/search', () => {
	it('should return 200 with valid query parameters', async () => {
		const response = await request(app).get('/api/example/search').query({
			filter: 'test',
			limit: 10,
			page: 1,
		})

		expect(response.status).toBe(200)
		expect(response.body).toEqual({
			message: 'Search successful',
			data: {
				query: {
					filter: 'test',
					limit: 10,
					page: 1,
				},
			},
		})
	})

	it('should return 400 with invalid number parameters', async () => {
		const response = await request(app).get('/api/example/search').query({
			limit: -1,
			page: 0,
		})

		expect(response.status).toBe(400)
		expect((response.body as {error: string}).error).toBeDefined()
	})
})
