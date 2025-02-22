# Backend Services

Collection of backend services including container-based APIs and serverless functions.

## Structure

```
/backend
├── container/  # Container-based backend services
│   └── src/    # Express.js API service
└── serverless/ # AWS Lambda functions
    └── src/    # Serverless functions
```

## Services

### Container-Based Backend

- Express.js REST API
- Docker containerization
- Type-safe endpoints
- Comprehensive testing
- [More details](./container/README.md)

### Serverless Functions

- AWS Lambda functions
- Event-driven architecture
- Automated deployments
- [More details](./serverless/README.md)

## Deployment

Each service has its own deployment pipeline:

- Container: Docker image to AWS ECS
- Serverless: Functions to AWS Lambda

See individual service READMEs for specific deployment instructions.
