FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine as production

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY --from=builder /app/dist ./dist
COPY .env.example .env

EXPOSE 3000

CMD ["npm", "run", "start"]

FROM node:20-alpine as development

WORKDIR /app

COPY package*.json ./
RUN npm ci && npm cache clean --force
ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app/dev
COPY tsconfig.json ./
COPY src ./src
COPY .env ./

EXPOSE 3000

CMD ["npm", "run", "dev"] 