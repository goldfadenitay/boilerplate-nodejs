import { PrismaClient } from '@prisma/client'
import { logger } from '../../../shared/src/logger/logger'

const SLOW_QUERY_THRESHOLD = 500

const prismaClient = new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
})

const prisma = prismaClient.$extends({
  name: 'log-slow-query',
  query: {
    $allModels: {
      $allOperations: async ({
        query,
        args,
        model,
        operation,
      }) => {
        const startTime = Date.now()
        const result = await query(args)
        const endTime = Date.now()
        const duration = endTime - startTime
        
        if (duration > SLOW_QUERY_THRESHOLD) {
          logger.info(`Slow query detected: Model=${model}, Operation=${operation}, Duration=${duration}ms`)
        }

        return result
      }
    },
  },
})
export { prisma }
