import { Request, Response, NextFunction } from 'express'
import { HttpRequest } from '@/types/http'
import { Controller } from '@/types/controller'
import { AppError } from '@/utils/errors'
import { tryCatch } from '@/utils/try-catch'

export const adaptExpressRoute =
	(controller: Controller) =>
	(req: Request, res: Response, next: NextFunction): void => {
		const httpRequest: HttpRequest = {
			body: req.body,
			query: req.query as Record<string, string>,
			params: req.params,
			headers: req.headers as Record<string, string>,
		}

		void (async () => {
			const [error, httpResponse] = await tryCatch(() => controller(httpRequest))

			if (error) {
				// Convert unknown errors to AppError
				if (!(error instanceof AppError)) {
					next(AppError.internal())
					return 
				}
				next(error)
				return 
			}

			if (httpResponse?.headers) {
				Object.entries(httpResponse.headers).forEach(([key, value]) => {
					res.setHeader(key, value)
				})
			}

			res.status(httpResponse.statusCode).json(httpResponse.body)
		})()
	}
