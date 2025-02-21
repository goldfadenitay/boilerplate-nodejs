import { describe, it, expect } from 'vitest'
import { getByIdParams } from '@/domains/example/get-by-id/get-by-id.types'

describe('getByIdParams', () => {
	it('should validate correct params', () => {
		const result = getByIdParams.safeParse({ id: '123' })
		expect(result.success).toBe(true)
	})

	it('should fail with empty id', () => {
		const result = getByIdParams.safeParse({ id: '' })
		expect(result.success).toBe(false)
	})
})
