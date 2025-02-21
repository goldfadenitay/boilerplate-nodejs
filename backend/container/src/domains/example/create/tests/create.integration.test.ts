import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('POST /api/example', () => {
	it('should return 200 with valid body', async () => {
		const validBody = {
			name: 'John Doe',
			email: 'john@example.com',
			age: 25,
		}

		const response = await request(app).post('/api/example').send(validBody)

		expect(response.status).toBe(200)
		expect(response.body).toEqual({
			message: 'Create successful',
			data: { body: validBody },
		})
	})

	it('should return 400 with invalid email', async () => {
		const invalidBody = {
			name: 'John Doe',
			email: 'invalid-email',
			age: 25,
		}

		const response = await request(app).post('/api/example').send(invalidBody)

		expect(response.status).toBe(400)
		expect(response.body.error).toBeDefined()
	})

	it('should return 400 with underage person', async () => {
		const invalidBody = {
			name: 'John Doe',
			email: 'john@example.com',
			age: 17,
		}

		const response = await request(app).post('/api/example').send(invalidBody)

		expect(response.status).toBe(400)
		expect(response.body.error).toBeDefined()
	})
})
