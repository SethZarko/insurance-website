import * as yup from 'yup'

const emailRules = /^[^\s@]+@[^\s@]+\.(?:com|ca|org|net)$/i;
// const phoneRules = ''

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('This Field is Required'),
    email: yup
        .string()
        .matches(emailRules, { message: 'Please enter a valid email'})
        .required('A Valid Email is Required'),
    message: yup
        .string()
        .required('Send a Message...')
})

export const quoteSchmea = yup.object().shape({
    effectiveDate: yup
                   .string()
                   .required('This Field is Required'),
    name: yup
        .string()
        .required('This Field is Required'),
    dateOfBirth: yup
        .string()
        .required('This Field is Required'),
    email: yup
        .string()
        .matches(emailRules, { message: 'Please enter a valid email'})
        .required('A Valid Email is Required'),
    phone: yup
        .string()
        .required('A Valid Phone Number is Required'),
})

   // .matches(phoneRules, { message: 'Please enter a valid phone number'})