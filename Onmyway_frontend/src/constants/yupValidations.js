import * as yup from 'yup'

let userSchema = yup.object().shape({
    username: yup.string().required(),
    dob: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')

})

export { userSchema }