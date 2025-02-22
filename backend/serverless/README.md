# Serverless Backend Functions

AWS Lambda functions built with TypeScript for serverless operations.

## Structure

```
/src
├── domains/           # Domain-specific code
│   └── purpose/      # Purpose-specific code (endpoints, jobs, cron)
│       └── function/ # Lambda function code
├── middleware/       # Lambda middleware
├── utils/           # Utility functions
├── types/           # TypeScript definitions
└── infrastructure/  # AWS infrastructure code
```

## Features

- Type-safe Lambda handlers
- Comprehensive error handling
- Structured logging
- Input validation with Zod
- Proper cold start optimization
- Local development support
- Automated deployments

## Development

```bash
# Install dependencies
npm install

# Start local development
npm run dev

# Run tests
npm test

# Deploy to AWS
npm run deploy
```

## Function Types

- API Endpoints (API Gateway triggers)
- Scheduled Jobs (EventBridge triggers)
- Event Processors (SQS/SNS triggers)
- Data Processors (S3/DynamoDB triggers)

## Testing

- Unit tests with Vitest
- Integration tests
- AWS SDK mocking
- Test coverage reporting

## Deployment

```bash
# Deploy all functions
npm run deploy

# Deploy specific function
npm run deploy:function <function-name>
```

## Environment Variables

See `.env.example` for required environment variables.
