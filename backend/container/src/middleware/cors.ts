import cors, { CorsOptions } from 'cors'
import { AppError } from '@/utils/errors'
import { createRequestLogger } from '@/utils/logger'
import { Request, Response, NextFunction } from 'express'

const createCorsOptions = (options: Partial<CorsOptions>): CorsOptions => ({
	origin: options.origin || '*',
	methods: options.methods || ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
	credentials: options.credentials || true,
	maxAge: options.maxAge || 86400,
	preflightContinue: false,
	optionsSuccessStatus: 204,
})

export const corsMiddleware = (options: Partial<CorsOptions> = {}) => {
	const corsOptions = createCorsOptions(options)

	return [
		// Handle preflight
		(req: Request, _: Response, next: NextFunction) => {
			const logger = createRequestLogger(req)
			if (req.method === 'OPTIONS') {
				logger.info('CORS preflight request')
			}
			next()
		},
		// Apply CORS
		cors(corsOptions),
		// Handle CORS errors
		(error: Error, req: Request, _res: Response, next: NextFunction) => {
			const logger = createRequestLogger(req)
			if (error.name === 'CorsError') {
				logger.error('CORS error', error)
				return next(AppError.forbidden('CORS error'))
			}
			next(error)
		},
	]
}
