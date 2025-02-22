# Shared Utilities

Common utilities and functions shared across services.

## Structure

```
/src
├── utils/     # Utility functions
├── errors/    # Error handling
├── logger/    # Logging utilities
├── types/     # Shared types
└── tests/     # Test files
```

## Features

- Type-safe utilities
- Error handling
- Logging
- Type guards
- Validation
- Testing utilities
- Documentation

## Usage

```typescript
import { createLogger, handleError, validate } from '@shared/utils'

// Logging
const logger = createLogger('service-name')
logger.info('Operation successful')

// Error handling
try {
	await operation()
} catch (error) {
	handleError(error, { context: 'operation' })
}

// Validation
const result = validate(input, schema)
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

## Documentation

- [Utility Reference](./docs/utilities.md)
- [Error Handling](./docs/errors.md)
- [Logging Guide](./docs/logging.md)
