import { Router } from 'express'

const router = Router()

// Route Validation
import { authenticateLoggedInAdmin } from '../auth/authenticateRoutes.js'
import { contactValidation } from '../validation/routeValidation.js'

// Controller Imports
import {
    contactCreateController,
    contactGetAllController,
    contactDeleteController
} from '../controllers/contactControllers.js'


// ---- CRUD ROUTES ---- //

// POST /api/contact/create
router.post('/create', contactValidation, contactCreateController)

// GET /api/contact/all
router.get('/all', authenticateLoggedInAdmin, contactGetAllController)

// DELETE /api/contact/:id
router.delete('/:id', authenticateLoggedInAdmin, contactDeleteController)


export default router