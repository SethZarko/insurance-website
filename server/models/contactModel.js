import mongoose, { Schema } from "mongoose"


const contactSchmea = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// ---- Mongoose Statics ---- //

//Save User to Database
contactSchmea.statics.createContact = async function(name, email, message) {
    try {

        // Create and Save New User
        const query = {
            name: name,
            email: email,
            message: message
        }

        const contact = new this(query)
        await contact.save()
        return contact

    } catch (error) {
      throw Error(error)
    }
};

// Get All Users From Database
contactSchmea.statics.findAllContact = async function() {

    try {
        const contacts = await this.find({})

        // Users Check
        if(contacts.length === 0) {
            return []
        } 

        return contacts

    } catch (error) {
        throw Error(error)
    }
}


// Delete User From Database
contactSchmea.statics.deleteContact = async function(id) {

    try {

        // Existing User Check
        const contact = await this.findById(id);

        if(!contact) {
            throw Error('Message Does Not Exist')
        }

        await this.findByIdAndDelete(id)
        return 1

    } catch (error) {
        throw Error(error)
    }
}

const Contact = mongoose.model('Contact', contactSchmea)
export default Contact