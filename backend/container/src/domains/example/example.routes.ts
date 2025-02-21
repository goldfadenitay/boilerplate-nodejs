import { Router } from 'express'
import { adaptExpressRoute } from '@/middleware/adapt-express'
import { getByIdController } from '@/domains/example/get-by-id/get-by-id.controller'
import { searchController } from '@/domains/example/search/search.controller'
import { createController } from '@/domains/example/create/create.controller'

const router = Router()

router.get('/search', adaptExpressRoute(searchController))
router.get('/:id', adaptExpressRoute(getByIdController))
router.post('/', adaptExpressRoute(createController))

export default router
