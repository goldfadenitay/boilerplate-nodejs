# Container-Based Backend Service

Express.js backend service built with TypeScript and Docker.

## Structure

```
/src
├── config/         # Configuration files
├── domains/        # Domain-specific code
│   └── endpoint/   # API endpoints
├── middleware/     # Express middleware
├── utils/         # Utility functions
├── types/         # TypeScript definitions
└── infrastructure/ # Infrastructure code
```

## Features

- Type-safe Express.js setup
- Comprehensive error handling
- Structured logging
- Request validation
- Authentication/Authorization
- Docker containerization
- Hot reloading in development

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## API Documentation

API endpoints are documented using OpenAPI/Swagger.

Access documentation at: `http://localhost:3000/api-docs`

## Testing

- Unit tests with Vitest
- Integration tests
- API tests with supertest
- Test coverage reporting

## Docker

```bash
# Build image
docker build -t backend-container .

# Run container
docker run -p 3000:3000 backend-container
```

## Environment Variables

See `.env.example` for required environment variables.
