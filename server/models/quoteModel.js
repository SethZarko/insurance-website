import mongoose, { Schema } from "mongoose"

// const quoteSchmea = new Schema({
//     effectiveDate: {
//         type: Date,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     dateOfBirth: {
//         type: Date,
//         required: true
//     },
//     address: {
//         unitNumber: String,
//         streetNumber: {
//             type: String,
//             required: true
//         },
//         streetName: {
//             type: String,
//             required: true
//         },
//         city: {
//             type: String,
//             required: true
//         },
//         province: {
//             type: String,
//             required: true
//         },
//         postalCode: {
//             type: String,
//             required: true
//         }
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String,
//         required: true
//     },
//     driversLicense: {
//         type: String,
//         required: true
//     },
//     dateOfG1: {
//         type: Date,
//         required: true
//     },
//     dateOfG2: {
//         type: Date,
//         required: true
//     },
//     dateOfG: {
//         type: Date,
//         required: true
//     },
//     yearOfVehicle: {
//         type: String,
//         required: true
//     },
//     makeOfVehicle: {
//         type: String,
//         required: true
//     },
//     modelOfVehicle: {
//         type: String,
//         required: true
//     },
//     VIN: {
//         type: String,
//         required: true
//     },
//     vehicleUse: {
//         type: String,
//         enum: ['pleasure', 'business'],
//         required: true
//     },
//     oneWayCommute: {
//         type: String,
//         required: true
//     },
//     annualDistance: {
//         type: String,
//         required: true
//     },
//     purchaseDate: {
//         type: Date,
//         required: true
//     },
//     purchasePrice: {
//         type: String,
//         required: true
//     },
//     parkedLocation: {
//         type: String,
//         enum: ['private-driveway', 'private-garage', 'paring-lot', 'underground-garage'],
//         required: true
//     },
//     winterTires: {
//         type: Boolean,
//         required: true
//     },
//     unrepairedDamage: {
//         type: Boolean,
//         required: true
//     },
//     modifcationsToVehicle: {
//         type: Boolean,
//         required: true
//     },
//     operatorsOfVehicle: {
//         name: {
//             type: String,
//             required: true
//         },
//         assignment: {
//             type: String,
//             enum: ['primary', 'secondary', 'occassional'],
//             required: true
//         }
//     },
//     ownershipOfVehicle: {
//         type: String,
//         enum: ['owned', 'financed', 'leased'],
//         required: true
//     },
//     lenderInfo: {
//         typeOf: {
//             type: String,
//             enum: ['lender', 'lessor'],
//             required: function() {
//                 return ['financed', 'leased'].includes(this.ownershipOfVehicle);
//             }
//         },
//         name: {
//             type: String,
//         },
//         address: {
//             unitNumber: String,
//             streetNumber: {
//                 type: String,
//             },
//             streetName: {
//                 type: String,
//             },
//             city: {
//                 type: String,
//             },
//             province: {
//                 type: String,
//             },
//             postalCode: {
//                 type: String,
//             }
//         }
//     },
//     dealerContact: {
//         name: {
//             type: String
//         },
//         email: {
//             type: String
//         },
//         phone: {
//             type: String
//         }
//     },
//     currentInsurer: {
//         name: {
//             type: String,
//         },
//         expiryDate: {
//             type: Date
//         }
//     },
//     convictions: {
//         type: String,
//         enum: ['1', '2', '3 or more'],
//         required: true
//     },
//     convcitionTypes: {
//         type: String,
//         enum: ['major', 'minor', 'both'],
//         required: true
//     }, 
//     claims: {
//         type: String,
//         enum: ['1', '2', '3 or more'],
//         required: true
//     },
//     licenseCancelled: {
//         type: Boolean,
//         required: true
//     },
//     insuranceCancelled: {
//         type: Boolean,
//         required: true
//     },
//     numberOfVehicles: {
//         type: String,
//         required: true
//     },
//     numberOfDrivers: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// })

const quoteSchmea = new Schema({
    effectiveDate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// ---- Mongoose Statics ---- //

//Save Quote to Database
quoteSchmea.statics.createQuote = async function(
    effectiveDate, 
    name, 
    dateOfBirth,
    email, 
    phone
) {
    try {
        const quote = new this({
            effectiveDate, 
            name, 
            dateOfBirth,
            email, 
            phone
        })
        await quote.save()
        return quote

    } catch (error) {
      throw Error(error)
    }
};

// Get All Quotes From Database
quoteSchmea.statics.findAllQuotes = async function() {

    try {
        const quotes = await this.find({})

        // Users Check
        if(quotes.length === 0) {
            return []
        } 

        return quotes

    } catch (error) {
        throw Error(error)
    }
}

// Get Single Quote From Database
quoteSchmea.statics.findSingleQuote = async function(req, res, id) {

    try {

        const quote = await this.findById(id)

        // Quote Check
        if(!quote) {
            return res.status(404).json({ 
                data: 'Quote does not exist'
            }) 
        } 

        return quote

    } catch (error) {
        throw Error(error)
    }
}


// Delete Quote From Database
quoteSchmea.statics.deleteQuote = async function(id) {

    try {

        // Existing User Check
        const quote = await this.findById(id);

        if(!quote) {
            throw Error('Quote Does Not Exist')
        }

        await this.findByIdAndDelete(id)
        return 1

    } catch (error) {
        throw Error(error)
    }
}

const Quote = mongoose.model('Quote', quoteSchmea)
export default Quote