import { Router } from 'express'
import { RequestsTypesController } from './../controllers/requests_types.controller'

const router = Router()
const requestsTypesController = RequestsTypesController

router.get('/', requestsTypesController.findAll)
router.get('/:id', requestsTypesController.findOne)
router.post('/', requestsTypesController.create)
router.put('/:id', requestsTypesController.update)
router.delete('/:id', requestsTypesController.delete)

export default router
