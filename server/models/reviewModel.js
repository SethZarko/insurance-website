import mongoose, { Schema } from "mongoose"


const reviewSchmea = new Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// ---- Mongoose Statics ---- //

//Save Review to Database
reviewSchmea.statics.createReview = async function(name, review) {
    try {

        // Create and Save New Review
        const query = {
            name: name,
            review: review,
        }

        const newReview = new this(query)
        await newReview.save()
        return newReview

    } catch (error) {
      throw Error(error)
    }
};

// Get All Reviews From Database
reviewSchmea.statics.findAllReviews = async function() {

    try {
        const reviews = await this.find({})

        // Check
        if(reviews.length === 0) {
            return []
        } 

        return reviews

    } catch (error) {
        throw Error(error)
    }
}


// Delete Review From Database
reviewSchmea.statics.deleteReview = async function(id) {

    try {

        // Existing Review Check
        const review = await this.findById(id);

        if(!review) {
            throw Error('Review Does Not Exist')
        }

        await this.findByIdAndDelete(id)
        return 1

    } catch (error) {
        throw Error(error)
    }
}

const Review = mongoose.model('Review', reviewSchmea)
export default Review