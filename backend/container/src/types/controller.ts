import { HttpRequest, HttpResponse } from './http'

export interface Controller {
	(req: HttpRequest): Promise<HttpResponse<unknown>>
	params?: Record<string, any>
	query?: Record<string, any>
	body?: Record<string, any>
	responses?: Record<string, any>
}

export type ControllerFn<T> = Controller &
	((req: HttpRequest) => Promise<HttpResponse<T>>)
