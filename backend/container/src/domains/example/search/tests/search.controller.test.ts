import { describe, it, expect } from 'vitest'
import { searchController } from '@/domains/example/search/search.controller'
import { HttpRequest } from '@/types/http'

describe('searchController', () => {
	it('should return success response with valid query parameters', async () => {
		const request: HttpRequest = {
			params: {},
			query: {
				filter: 'test',
				limit: '10',
				page: '1',
			},
			body: {},
			headers: {},
		}

		const response = await searchController(request)

		expect(response.statusCode).toBe(200)
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

	it('should return success response with optional parameters omitted', async () => {
		const request: HttpRequest = {
			params: {},
			query: {},
			body: {},
			headers: {},
		}

		const response = await searchController(request)

		expect(response.statusCode).toBe(200)
		expect((response.body as { data: { query: Record<string, unknown> } }).data.query).toEqual({})
	})
})
