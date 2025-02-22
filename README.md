# Backend Template Monorepo

A scalable and maintainable monorepo template for backend services and frontend applications using TypeScript.

## Repository Structure

```
/backend
├── container/    # Container-based backend services
├── serverless/   # AWS Lambda functions
/frontend
├── vue/          # Vue 3 Composition API application
├── react/        # React TypeScript application
/contracts        # API contracts and type definitions
/database
├── postgres/     # PostgreSQL database utilities
├── NoSQL/        # NoSQL (DynamoDB/MongoDB) utilities
/infrastructure   # Terraform infrastructure code
/shared          # Shared utilities and functions
/scripts         # Development and deployment scripts
/docs            # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker and Docker Compose
- AWS CLI configured (for deployment)
- Terraform (v1.0+)

### Development Environment

#### Backend Services

```bash
# Start backend container service
npm run container:docker:dev

# Build backend container
npm run container:docker:build

# Production mode
npm run container:docker:prod
```

#### Frontend Applications

Vue application (http://localhost:8080):

```bash
cd frontend/vue
npm install
npm run dev
```

React application (http://localhost:8081):

```bash
cd frontend/react
npm install
npm run dev
```

### Development Workflow

1. Create feature branch from main
2. Make changes
3. Run tests and linting
4. Create pull request
5. Review and merge

### Testing

```bash
# Run all tests
npm test

# Run specific service tests
npm run test:container
npm run test:serverless
npm run test:vue
npm run test:react
```

## Architecture

### Backend Services

- Container-based REST API (Express.js)
- Serverless functions (AWS Lambda)
- PostgreSQL and NoSQL databases
- Redis caching

### Frontend Applications

- Vue 3 with Composition API

  - TypeScript
  - Pinia for state management
  - Vue Router
  - Tailwind CSS

- React with TypeScript
  - React Query
  - Zustand for state management
  - React Router
  - Tailwind CSS

## Deployment

The repository uses GitHub Actions for CI/CD:

- `build.yml`: Builds and tests services
- `test.yml`: Runs comprehensive test suite
- `deploy.yml`: Deploys to AWS

## Documentation

- [Architecture Overview](./docs/architecture.md)
- [Development Guide](./docs/development.md)
- [Deployment Guide](./docs/deployment.md)
- [API Documentation](./docs/api.md)
- [Frontend Documentation](./docs/frontend.md)

## Environment Variables

Each service has its own `.env.example` file showing required environment variables:

- `backend/container/.env.example`
- `frontend/vue/.env.example`
- `frontend/react/.env.example`
