import Contact from '../models/contactModel.js'

// Utility Functions
import { validationResult } from 'express-validator';
import { isValidObjectId } from '../validation/isValidID.js'

// ---- CONTACT CRUD CONTROLLERS ---- //

// contact Create Controller
export const contactCreateController = async (req, res, next) => {
    const { name, email, message } = req.body
    
    try {

        // Validation Error Check
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const contact = await Contact.createContact(name, email, message)
    
        return res.status(201).json(contact)

      } catch (error) {
        
        next(error)
    }
}

// contact Get All Controller
export const contactGetAllController = async (req, res, next) => {
    try {
        const contacts = await Contact.findAllContact()

        return res.status(200).json(contacts)
    
    } catch (error) {
        next(error)
    }
} 

// contact Delete Controller
export const contactDeleteController = async (req, res, next) => {
    const { id } = req.params
    try {

        // Check if ID in params
        if(!id) {
            return res.status(400).json({
                data: 'Please Provide and Id'
            })
        }

        // Check if ID is valid MongoID
        if(!isValidObjectId(id)) {
            return res.status(400).json({
                data: 'Invalid Id'
            })
        }

        await Contact.deleteContact(id)
    
        return res.status(200).json({ message: 'Message Deleted'})

      } catch (error) {

        next(error)
    }
}