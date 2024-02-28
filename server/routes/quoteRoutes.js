import { Router } from 'express'

const router = Router()

// Route Validation
import { authenticateLoggedInAdmin } from '../auth/authenticateRoutes.js'
import { quoteValidation } from '../validation/routeValidation.js'

// Controller Imports
import {
    quoteCreateController,
    quoteGetAllController,
    quoteGetOneController,
    quoteDeleteController
} from '../controllers/quoteControllers.js'


// ---- CRUD ROUTES ---- //

// POST /api/quote/create
router.post('/create', quoteValidation, quoteCreateController)

// GET /api/quote/all
router.get('/all', authenticateLoggedInAdmin, quoteGetAllController)

// GET /api/quote/:id
router.get('/:id', authenticateLoggedInAdmin, quoteGetOneController)

// DELETE /api/quote/:id
router.delete('/:id', authenticateLoggedInAdmin, quoteDeleteController)


export default router