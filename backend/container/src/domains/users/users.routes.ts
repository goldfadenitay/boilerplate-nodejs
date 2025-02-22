import { Router } from 'express'
import { adaptExpressRoute } from '@/middleware/adapt-express'
import { searchUsersController } from './search/search.controller'
import { createUserController } from './create/create.controller'

const router = Router()

router.get('/search', adaptExpressRoute(searchUsersController))
router.post('/create', adaptExpressRoute(createUserController))

export default router
