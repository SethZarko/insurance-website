import mongoose, { Schema } from "mongoose"


const blogSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

// ---- Mongoose Statics ---- //

//Save User to Database
blogSchema.statics.createPost = async function(title, body, imageUrl, tags) {
    try {

        // Create and Save New User
        const query = {
            title: title,
            body: body,
            imageUrl: imageUrl,
            tags: tags
        }

        const post = new this(query)
        await post.save()
        return post

    } catch (error) {
      throw Error(error)
    }
};

// Get All Users From Database
blogSchema.statics.findAllPosts = async function() {

    try {
        const posts = await this.find({})

        // Users Check
        if(posts.length === 0) {
            return []
        } 

        return posts

    } catch (error) {
        throw Error(error)
    }
}

// Get Single Post From Database
blogSchema.statics.findSinglePost = async function(req, res, id) {

    try {

        const post = await this.findById(id)

        // User Check
        if(!post) {
            return res.status(404).json({ 
                data: 'Post does not exist'
            }) 
        } 

        return post

    } catch (error) {
        throw Error(error)
    }
}


// Update User In Database
blogSchema.statics.updatePost = async function(id, title, body, imageUrl) {

    try {

        const post = await this.findById(id);

        // User Check
        if (!post) {
            throw Error('Post Does Not Exist');
        }

        const query = {
            title: title,
            body: body,
            imageUrl: imageUrl
        }

        // Update User Data
        const updated = await post.set(query);
        await updated.save();

        return updated;

    } catch (error) {
        throw Error(error);
    }
}

// Delete User From Database
blogSchema.statics.deletePost = async function(id) {

    try {

        // Existing User Check
        const post = await this.findById(id);

        if(!post) {
            throw Error('Post Does Not Exist')
        }

        await this.findByIdAndDelete(id)
        return 1

    } catch (error) {
        throw Error(error)
    }
}

const Blog = mongoose.model('Blog', blogSchema)
export default Blog