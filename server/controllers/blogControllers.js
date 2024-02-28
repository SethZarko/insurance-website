import Blog from '../models/blogModel.js'

import { isValidObjectId } from '../validation/isValidID.js';

// ---- BLOG CRUD CONTROLLERS ---- //

// blog Create Controller
export const blogCreateController = async (req, res, next) => {
    const { title, body, imageUrl, tags } = req.body
    
    try {

        // // Validation Error Check
        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        const post = await Blog.createPost(title, body,imageUrl, tags)
    
        return res.status(201).json(post)

      } catch (error) {
        
        next(error)
    }
}

// blog Get All Controller
export const blogGetAllController = async (req, res, next) => {
    try {
        const posts = await Blog.findAllPosts()

        return res.status(200).json(posts)
    
    } catch (error) {
        next(error)
    }
} 

// blog Get Single Controller
export const blogGetSingleController = async (req, res, next) => {
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

        const post = await Blog.findSinglePost(req, res, id)

        return res.status(200).json(post)

    } catch (error) {

        next(error)
    }
} 

// blog Update Controller
export const blogUpdateController = async (req, res, next) => {
    const { title, body } = req.body
    const { id } = req.params

    try {

        // // Validation Error Check
        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

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

        const updatedPost = await Blog.updatePost(id, title, body)
    
        return res.status(201).json({ 
            message: 'Post Updated',
            user: updatedPost
        })

      } catch (error) {

        next(error)
    }
}

// blog Delete Controller
export const blogDeleteController = async (req, res, next) => {
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

   
        await Blog.deletePost(id)
    
        return res.status(200).json({ message: 'Post Deleted'})

      } catch (error) {

        next(error)
    }
}