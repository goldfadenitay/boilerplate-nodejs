```
│── modules/                  # Each module is independent & scalable
│── serverless/
│   ├── src/
│   │   ├── endpoints/         # REST API handlers
│   │   │   ├── example/
│   │   │   │   ├── example.endpoint.controller.ts
│   │   │   │   ├── example.endpoint.service.ts
│   │   │   │   ├── example.endpoint.types.ts
│   │   │   │   ├── example.endpoint.utils.ts
│   │   ├── cronjobs/          # Scheduled tasks
│   │   │   ├── example.cronjob.ts
│   │   ├── jobs/              # Manually triggered jobs
│   │   │   ├── example.job.ts
│   │   ├── serverless.ts      # Serverless entry point
│   ├── scripts/               # Deployment and other scripts
│   ├── tsconfig.json          # Extends root config
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   ├── serverless.json        # Serverless configuration
│   ├── package.json
│   ├── README.md
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
```
