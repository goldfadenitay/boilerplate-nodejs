# Database Utilities

Collection of database utilities for PostgreSQL and NoSQL databases.

## Structure

```
/database
├── postgres/ # PostgreSQL database utilities
└── NoSQL/    # NoSQL (DynamoDB/MongoDB) utilities
```

## Modules

### PostgreSQL Utilities

- Type-safe database operations
- Connection pooling
- Migration management
- [More details](./postgres/README.md)

### NoSQL Utilities

- DynamoDB/MongoDB support
- Type-safe operations
- Connection management
- [More details](./NoSQL/README.md)

## Development

```bash
# Install all dependencies
npm run install:all

# Run all tests
npm run test:all

# Run migrations
npm run migrate:all
```

## Configuration

Each database module has its own configuration requirements. See individual module READMEs for details.
