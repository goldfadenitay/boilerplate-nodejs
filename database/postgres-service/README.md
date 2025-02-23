# PostgreSQL Database Utilities

Type-safe PostgreSQL database operations and utilities.

## Structure

```
/src
├── client/     # Database client implementation
├── schema/     # Database schema definitions
├── migrations/ # Database migrations
├── operations/ # Database operations
├── utils/      # Utility functions
└── tests/      # Test files
```

## Features

- Type-safe database operations
- Connection pooling
- Transaction management
- Migration handling
- Query building
- Error handling
- Performance optimization
- Comprehensive logging

## Usage

```typescript
import { createClient } from '@database/postgres'

const client = createClient()

// Type-safe queries
const users = await client.users.findMany({
	where: { active: true },
})
```

## Development

```bash
# Install dependencies
npm install

# Run migrations
npm run migrate

# Run tests
npm test
```

## Database Management

```bash
# Create migration
npm run migration:create

# Run migrations
npm run migration:up

# Rollback migration
npm run migration:down
```

## Environment Variables

See `.env.example` for required database configuration.
