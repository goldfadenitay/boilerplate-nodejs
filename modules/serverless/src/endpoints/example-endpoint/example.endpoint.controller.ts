import { APIGatewayProxyHandler } from 'aws-lambda'
import { exampleService } from './example.endpoint.service'

export const handler: APIGatewayProxyHandler = async (event) => {
	const data = exampleService()
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: data,
			event,
		}),
	}
}
