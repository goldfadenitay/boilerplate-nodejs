```
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
```
