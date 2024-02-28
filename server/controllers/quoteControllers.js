import Quote from '../models/quoteModel.js'

// Utility Functions
import { validationResult } from 'express-validator';
import { isValidObjectId } from '../validation/isValidID.js'

// ---- QUOTE CRUD CONTROLLERS ---- //

// Quote Create Controller
export const quoteCreateController = async (req, res, next) => {
    const { 
        effectiveDate, 
        name, 
        dateOfBirth,
        email, 
        phone,
       
    } = req.body

    // let quoteData = {
    //     effectiveDate, 
    //     name, 
    //     dateOfBirth,
    //     unitNumber,
    //     streetNumber,
    //     streetName,
    //     city,
    //     province,
    //     postalCode,
    //     email, 
    //     phone,
    //     driversLicense,
    //     dateOfG1,
    //     dateOfG2,
    //     dateOfG,
    //     yearOfVehicle,
    //     makeOfVehicle, 
    //     modelOfVehicle,
    //     VIN,
    //     vehicleUse,
    //     oneWayCommute,
    //     annualDistance,
    //     purchaseDate,
    //     purchasePrice,
    //     parkedLocation,
    //     winterTires,
    //     unrepairedDamage,
    //     modicationsToVehicle,
    //     operatorsOfVehicle,
    //     assignment,
    //     ownershipOfVehicle,
    //     lenderInfoType,
    //     lenderInfoName,
    //     lenderInfoUnitNumber,
    //     lenderInfoStreetNumber,
    //     lenderInfoStreetName,
    //     lenderInfoCity,
    //     lenderInfoProvince,
    //     lenderInfoPostalCode,
    //     dealerName,
    //     dealerEmail,
    //     dealerPhone,
    //     currentInsurerName,
    //     currentInsurerExpiryDate,
    //     convictions,
    //     convcitionTypes,
    //     claims,
    //     licensedCancelled,
    //     insuranceCancelled,
    //     numberOfVehicles,
    //     numberOfDrivers
    // }
    
    try {

        // Validation Error Check
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const quote = await Quote.createQuote(
            effectiveDate, 
            name, 
            dateOfBirth,
            email, 
            phone
        )
    
        return res.status(201).json(quote)

      } catch (error) {
        
        next(error)
    }
}

// Quote Get All Controller
export const quoteGetAllController = async (req, res, next) => {
    try {
        const quotes = await Quote.findAllQuotes()

        return res.status(200).json(quotes)
    
    } catch (error) {
        next(error)
    }
}

// Quote Get Single Controller
export const quoteGetOneController = async (req, res, next) => {
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

        const quote = await Quote.findSingleQuote(req, res, id)

        return res.status(200).json(quote)

    } catch (error) {

        next(error)
    }
} 

// Quote Delete Controller
export const quoteDeleteController = async (req, res, next) => {
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

        await Quote.deleteQuote(id)
    
        return res.status(200).json({ message: 'Quote Deleted'})

      } catch (error) {

        next(error)
    }
}