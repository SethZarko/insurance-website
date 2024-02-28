import { body } from 'express-validator';

export const adminCreateValidation = [
    body("*").notEmpty().withMessage('All Fields Required'),
    body("email").notEmpty().trim().isEmail().normalizeEmail().escape(),
    body("password")
        .trim()
        .isLength({ min: 8, max: 12 })
        .withMessage('Password must be at least 8 characters long and no more than 12 characters')
        .matches(/\d/)
        .withMessage('Password must contain at least one digit')
        .matches(/[a-z]/)
        .withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*()_+]/)
        .withMessage('Password must contain at least one special character')
        .escape()
]


export const loginValidation = [
    body("*").notEmpty().withMessage('All Fields Required'),
    body("email").notEmpty().trim().isEmail().normalizeEmail().escape(),
    body("password")
        .trim()
        .escape()
]

// export const contactValidation = [
//     body("*")
//         .notEmpty()
//         .withMessage('All Fields Required'),
//     body("name")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("email")
//         .notEmpty()
//         .trim()
//         .isEmail()
//         .normalizeEmail()
//         .escape(),
//     body("message")
//         .notEmpty()
//         .trim()
//         .escape()
// ]

// export const quoteValidation = [
//     body("*")
//         .escape(),
//     body('effectiveDate')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("name")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("dateOfBirth")
//         .notEmpty()
//         .trim()
//         .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).withMessage('Invalid Date Format: Please use YYYY-MM-DD')
//         .escape(),
//     body("unitNumber")
//         .trim()
//         .escape(),
//     body("streetNumber")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("streetName")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("city")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("province")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("postalCode")
//         .notEmpty()
//         .trim()
//         .notEmpty().withMessage('Postal code is required')
//         .matches(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/).withMessage('Invalid postal code format')
//         .escape(),
//     body("email")
//         .notEmpty()
//         .trim()
//         .isEmail()
//         .normalizeEmail()
//         .escape(),
//     body("phone")
//         .notEmpty()
//         .trim()
//         .escape(),
//     body("driversLicense")
//         .notEmpty()
//         .trim()
//         .matches(/^[A-Z]\d{4}-\d{5}-\d{2}$/).withMessage('Invalid Format')
//         .escape(),
//     body('dateOfG1')
//         .notEmpty()
//         .trim()
//         .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).withMessage('Invalid Date Format: Please use YYYY-MM-DD')
//         .escape(),
//     body('dateOfG2')
//         .notEmpty()
//         .trim()
//         .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).withMessage('Invalid Date Format: Please use YYYY-MM-DD')
//         .escape(),
//     body('dateOfG')
//         .notEmpty()
//         .trim()
//         .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).withMessage('Invalid Date Format: Please use YYYY-MM-DD')
//         .escape(),
//     body('yearOfVehicle')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('makeOfVehicle')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('modelOfVehicle')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('VIN')
//         .notEmpty()
//         .trim()
//         .matches(/^[A-HJ-NPR-Z0-9]{17}$/i).withMessage('Please Enter a Valid VIN')
//         .escape(),
//     body('vehicleUse')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('oneWayCommute')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('annualDistance')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('purchaseDate')
//         .notEmpty()
//         .trim()
//         .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).withMessage('Invalid Date Format: Please use YYYY-MM-DD')
//         .escape(),
//     body('purchasePrice')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('parkedLocation')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('winterTires')
//         .notEmpty()
//         .escape(),
//     body('unrepairedDamage')
//         .notEmpty()
//         .escape(),
//     body('modifcationsToVehicle')
//         .notEmpty()
//         .escape(),
//     body('assignment')
//         .notEmpty()
//         .escape(),
//     body('ownershipOfVehicle')
//         .notEmpty()
//         .escape(),
//     body('typeOf')
//         .escape(),
//     body('expiryDate')
//         .escape(),
//     body('convictions')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('claims')
//         .notEmpty()
//         .trim()
//         .escape(),
//     body('licenseCancelled')
//         .notEmpty()
//         .escape(),
//     body('insuranceCancelled')
//         .notEmpty()
//         .escape(),
//     body('numberOfVehicles')
//         .notEmpty()
//         .escape(),
//     body('numberOfDrivers')
//         .notEmpty()
//         .escape()
// ]

export const contactValidation = [
    body("*")
        .notEmpty()
        .withMessage('All Fields Required'),
    body("name")
        .notEmpty()
        .trim()
        .escape(),
    body("email")
        .notEmpty()
        .trim()
        .isEmail()
        .normalizeEmail()
        .escape(),
    body("message")
        .notEmpty()
        .trim()
        .escape()
]

export const quoteValidation = [
    body("*")
        .escape(),
    body('effectiveDate')
        .notEmpty()
        .trim()
        .escape(),
    body("name")
        .notEmpty()
        .trim()
        .escape(),
    body("dateOfBirth")
        .notEmpty()
        .trim()
        .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).withMessage('Invalid Date Format: Please use YYYY-MM-DD')
        .escape(),
    body("email")
        .notEmpty()
        .trim()
        .isEmail()
        .normalizeEmail()
        .escape(),
    body("phone")
        .notEmpty()
        .trim()
        .escape()
]