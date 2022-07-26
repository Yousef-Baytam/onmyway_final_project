import * as yup from 'yup'
import moment from 'moment'

let userSchema = yup.object().shape({
    username: yup.string().required().min(8),
    dob: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    phone: yup.string().required(),
    password: yup.string().required('Password is required').min(6),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})

let updateUserSchema = yup.object().shape({
    username: yup.string().required().min(8),
    dob: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    phone: yup.string().required(),
})

let postSchema = yup.object().shape({
    from: yup.object().shape({
        location: yup.string().required(),
        geometry: yup.object().shape({
            type: yup.string().required(),
            coordinates: yup.array().min(2).required('Departure location is required')
        })
    }),
    to: yup.object().shape({
        location: yup.string().required(),
        geometry: yup.object().shape({
            type: yup.string().required(),
            coordinates: yup.array().min(2).required('Departure location is required')
        })
    }),
    date: yup.date().min(
        moment().add(1, 'days'),
        "Ride date should be starting tomorrow or on a schedule"
    ),
    departure: yup.string().required(),
    availableSeats: yup.string().required(),
    gender: yup.string().required(),
})

export { userSchema, updateUserSchema, postSchema }