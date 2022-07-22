import Joi from 'Joi'
import moment from 'moment'

const userJoiSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .min(6)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    gender: Joi.string().valid('male', 'female', 'other'),

    dob: Joi.date().default(() => moment().format()),

})

module.exports = { userJoiSchema }