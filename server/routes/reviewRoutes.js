import { Router } from 'express'

const router = Router()

// Route Validation
import { authenticateLoggedInAdmin } from '../auth/authenticateRoutes.js'

// Controller Imports
import {
    reviewCreateController,
    reviewGetAllController,
    reviewDeleteController
} from '../controllers/reviewControllers.js'


// ---- CRUD ROUTES ---- //

// POST /api/reviews/create
router.post('/create', authenticateLoggedInAdmin, reviewCreateController)

// GET /api/reviews/all
router.get('/all', reviewGetAllController)

// DELETE /api/reviews/:id
router.delete('/:id', authenticateLoggedInAdmin, reviewDeleteController)


export default router