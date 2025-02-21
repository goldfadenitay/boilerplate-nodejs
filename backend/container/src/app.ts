/// <reference types="vite/client" />

import express from 'express'
import { errorHandler } from '@/middleware/error-handler'
import exampleRouter from '@/domains/example/example.routes'

const app = express()

// Middleware
app.use(express.json())

// Health check endpoint
app.get('/health', (_req, res) => {
	res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/example', exampleRouter)

// Error handling should be last
app.use(errorHandler)

export { app }
