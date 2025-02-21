import { Request, Response, NextFunction } from 'express'
import { createRequestLogger } from '@/utils/logger'

export const performanceMonitor = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const startTime = Date.now()
	const requestLogger = createRequestLogger(req, startTime)

	requestLogger.info('Request started')

	res.on('finish', () => {
		requestLogger.end(res)
	})

	next()
}
