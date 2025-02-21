import { HttpRequest, HttpResponse } from './http'

export type Controller = (req: HttpRequest) => Promise<HttpResponse<unknown>>

export type ControllerFn<T> = (req: HttpRequest) => Promise<HttpResponse<T>>
