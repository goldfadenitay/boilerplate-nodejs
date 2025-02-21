import { describe, it, expect } from 'vitest'
import { createBody } from '@/domains/example/create/create.types'

describe('createBody', () => {
	it('should validate correct body', () => {
		const result = createBody.safeParse({
			name: 'John Doe',
			email: 'john@example.com',
			age: 25,
		})
		expect(result.success).toBe(true)
	})

	it('should fail with invalid email', () => {
		const result = createBody.safeParse({
			name: 'John Doe',
			email: 'invalid-email',
			age: 25,
		})
		expect(result.success).toBe(false)
	})

	it('should fail with underage person', () => {
		const result = createBody.safeParse({
			name: 'John Doe',
			email: 'john@example.com',
			age: 17,
		})
		expect(result.success).toBe(false)
	})
})
