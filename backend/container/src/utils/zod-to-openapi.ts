import {
	ZodType,
	ZodObject,
	ZodNumber,
	ZodString,
	ZodEnum,
	ZodArray,
} from 'zod'

type OpenAPISchema = {
	type: string
	description?: string
	minimum?: number
	maximum?: number
	enum?: string[]
	items?: OpenAPISchema
	properties?: Record<string, OpenAPISchema>
	required?: string[]
}

export const zodToOpenAPI = (schema: ZodType): OpenAPISchema => {
	if (schema instanceof ZodObject) {
		const properties: Record<string, OpenAPISchema> = {}
		const required: string[] = []

		Object.entries(schema.shape).forEach(([key, value]) => {
			properties[key] = zodToOpenAPI(value as ZodType)
			if (!(value as ZodType).isOptional()) {
				required.push(key)
			}
		})

		return {
			type: 'object',
			properties,
			...(required.length > 0 && { required }),
		}
	}

	if (schema instanceof ZodString) {
		return {
			type: 'string',
			...(schema.description && { description: schema.description }),
		}
	}

	if (schema instanceof ZodNumber) {
		return {
			type: 'number',
			...(schema.description && { description: schema.description }),
			...(schema.minValue && { minimum: schema.minValue }),
			...(schema.maxValue && { maximum: schema.maxValue }),
		}
	}

	if (schema instanceof ZodEnum) {
		return {
			type: 'string',
			enum: schema.options,
		}
	}

	if (schema instanceof ZodArray) {
		return {
			type: 'array',
			items: zodToOpenAPI(schema.element),
		}
	}

	return { type: 'string' } // fallback
}
