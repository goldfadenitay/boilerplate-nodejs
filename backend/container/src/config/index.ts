import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'test', 'production'])
		.default('development'),
	PORT: z.string().transform(Number).default('3000'),
	DATABASE_URL: z.string(),
	JWT_SECRET: z.string(),
	CORS_ORIGIN: z.string().default('*'),
})

export const config = envSchema.parse(process.env)
