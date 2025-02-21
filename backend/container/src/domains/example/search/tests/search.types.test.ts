import { describe, it, expect } from 'vitest'
import { searchQuery } from '@/domains/example/search/search.types'

describe('searchQuery', () => {
	it('should validate correct query parameters', () => {
		const result = searchQuery.safeParse({
			filter: 'test',
			limit: '10',
			page: '1',
		})
		expect(result.success).toBe(true)
		if (result.success) {
			expect(result.data).toEqual({
				filter: 'test',
				limit: 10,
				page: 1,
			})
		}
	})

	it('should fail with invalid number parameters', () => {
		const result = searchQuery.safeParse({
			limit: -1,
			page: 0,
		})
		expect(result.success).toBe(false)
	})
})
