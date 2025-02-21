// Global error handling middleware

import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/errors'
import { internalServer } from '@/utils/response'

export const errorHandler = (
	error: Error,
	_req: Request,
	res: Response,
	_next: NextFunction,
): void => {
	console.error('Error:', error)
	console.log('here?', error)

	if (error instanceof AppError) {
		res.status(error.statusCode).json({
			error: error.message,
			code: error.code,
			details: error.details,
		})
		return
	}
	const response = internalServer()
	res.status(response.statusCode).json(response.body)
}
