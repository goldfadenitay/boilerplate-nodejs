# NoSQL Database Utilities

Type-safe NoSQL database operations supporting DynamoDB and MongoDB.

## Structure

```
/src
├── clients/    # Database client implementations
│   ├── dynamodb.ts
│   ├── mongodb.ts
│   └── base.ts
├── models/     # Data models and schemas
├── operations/ # Database operations
├── utils/      # Utility functions
└── tests/      # Test files
```

## Features

- Type-safe database operations
- Connection pooling
- Multi-database support
- Query optimization
- Error handling
- Performance monitoring
- Comprehensive logging
- Batch operations

## Usage

```typescript
import { createDynamoClient, createMongoClient } from '@database/nosql'

// DynamoDB
const dynamoClient = createDynamoClient()
const items = await dynamoClient.table('users').query({
	indexName: 'status',
	keyCondition: { status: 'active' },
})

// MongoDB
const mongoClient = createMongoClient()
const users = await mongoClient
	.collection('users')
	.find({
		status: 'active',
	})
	.toArray()
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build package
npm run build
```

## Database Management

```bash
# Create tables/collections
npm run init:dynamo
npm run init:mongo

# Run migrations
npm run migrate
```

## Environment Variables

See `.env.example` for required database configurations.
