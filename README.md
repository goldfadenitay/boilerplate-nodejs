# A boilerplate for a simple, fast, and flexible backend in node JS

The purpose of this template is purely for experimenting and playing around

## Feature implemnted so far

- Prettier
  Add this to your local settings.json file:

```
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

## Roadmap

- [x] Add a Readme
- [x] Init node js
- [x] Init TS
- [x] Init prettier
- [ ] Init Vite
- [ ] Create the structure for this repo
- [ ] Add a script to create endpoints/cronjobs/jobs

# Structure

```
backend-template/
│── contracts/                # Shared API types and OpenAPI definitions
│   ├── public/               # Public API contracts
│   ├── private/              # Private API contracts
│   ├── index.ts              # Export all contracts
│
│── infrastructure/           # Terraform infrastructure code (empty for now)
│
│── modules/                  # Each module is independent & scalable
│   │── serverless/           # AWS Lambda-based functions
│   │   ├── src/
│   │   │   ├── functions/
│   │   │   │   ├── exampleFunction/
│   │   │   │   │   ├── controller.ts
│   │   │   │   │   ├── service.ts
│   │   │   │   │   ├── types.ts
│   │   │   │   │   ├── utils.ts
│   │   │   ├── index.ts
│   │   │   ├── serverless.ts   # Serverless config
│   │   ├── scripts/           # Any scripts for serverless module
│   │   ├── tsconfig.json
│   │   ├── package.json
│   │
│   │── container/            # ECS-based API services
│   │   ├── src/
│   │   │   ├── endpoints/
│   │   │   │   ├── exampleEndpoint/
│   │   │   │   │   ├── controller.ts
│   │   │   │   │   ├── service.ts
│   │   │   │   │   ├── types.ts
│   │   │   │   │   ├── utils.ts
│   │   │   ├── index.ts
│   │   ├── scripts/           # Any scripts for container module
│   │   ├── tsconfig.json
│   │   ├── package.json
│
│── database/                 # Prisma database module
│   ├── src/
│   │   ├── prisma/            # Prisma schema & migrations
│   │   ├── client.ts          # Prisma client setup
│   │   ├── repository.ts      # Generic repository pattern
│   ├── scripts/               # Any database scripts
│   ├── tsconfig.json
│   ├── package.json
│
│── shared/                   # Reusable functions and utilities
│   ├── src/
│   │   ├── utils/             # Common functions (e.g., error handling)
│   │   ├── exceptions.ts      # Custom error classes
│   │   ├── logger.ts          # Logging utilities
│   │   ├── constants.ts       # Any global constants
│   │   ├── types.ts           # Global shared types
│   ├── tsconfig.json
│   ├── package.json
│
│── scripts/                   # Global project-wide scripts (formatting, linting)
│
│── .husky/                    # Husky pre-commit hooks
│── package.json                # Root dependencies
│── tsconfig.json               # Root TypeScript config
│── vite.config.ts              # Vite configuration
│── vitest.config.ts            # Vitest configuration
│── README.md
```
