# API Contracts and Types

Shared API contracts, types, and schemas for backend services.

## Structure

```
/src
├── public/     # Public API contracts
│   └── v1/     # Version-specific contracts
├── private/    # Private API contracts
│   └── v1/     # Version-specific contracts
├── shared/     # Shared types and utilities
└── tests/      # Test files
```

## Features

- Type-safe API definitions
- Runtime validation with Zod
- Comprehensive documentation
- Version management
- Backwards compatibility
- Automated testing
- API examples

## Usage

```typescript
import { UserSchema, User } from '@contracts/public/v1/user'

// Validate input
const user = UserSchema.parse(input)

// Use types
const processUser = (user: User) => {
	// Type-safe operations
}
```

## Development

```bash
# Install dependencies
npm install

# Run type checks
npm run type-check

# Run tests
npm test

# Build package
npm run build
```

## Documentation

- [API Versioning](./docs/versioning.md)
- [Schema Guidelines](./docs/schemas.md)
- [Breaking Changes](./docs/breaking-changes.md)

## Publishing

```bash
# Build and publish
npm run publish
```
