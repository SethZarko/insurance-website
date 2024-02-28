import { Router } from 'express'

const router = Router()

// Validate Routes
import { authenticateLoggedInAdmin } from '../auth/authenticateRoutes.js'

// Controller Imports
import {
    blogCreateController,
    blogGetAllController,
    blogGetSingleController,
    blogUpdateController,
    blogDeleteController
} from '../controllers/blogControllers.js'


// ---- CRUD ROUTES ---- //

// POST /api/blog/create
router.post('/create', authenticateLoggedInAdmin, blogCreateController)

// GET /api/blog/all
router.get('/all', blogGetAllController)

// GET /api/blog/:id
router.get('/:id', blogGetSingleController)

// PUT /api/blog/:id
router.put('/:id', authenticateLoggedInAdmin, blogUpdateController)

// DELETE /api/blog/:id
router.delete('/:id', authenticateLoggedInAdmin, blogDeleteController)


export default router