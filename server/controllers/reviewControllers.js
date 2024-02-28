import Review from '../models/reviewModel.js'
import { isValidObjectId } from '../validation/isValidID.js'


// ---- REVIEW CRUD CONTROLLERS ---- //

// Review Create Controller
export const reviewCreateController = async (req, res, next) => {
    const { name, review } = req.body
    
    try {

        const newReview = await Review.createReview(name, review)
    
        return res.status(201).json(newReview)

      } catch (error) {
        
        next(error)
    }
}

// Review Get All Controller
export const reviewGetAllController = async (req, res, next) => {
    try {
        const reviews = await Review.findAllReviews()

        return res.status(200).json(reviews)
    
    } catch (error) {
        next(error)
    }
} 

// Review Delete Controller
export const reviewDeleteController = async (req, res, next) => {
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

        await Review.deleteReview(id)
    
        return res.status(200).json({ message: 'Review Deleted'})

      } catch (error) {

        next(error)
    }
}