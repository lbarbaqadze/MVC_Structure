import appError from "../utils/appError.js";
import Joi from "joi"

const userSchema = Joi.object({

    name: Joi.string().min(2).max(12).required().messages({
        'string.empty': 'The name field must not be empty.',
        'any.required': 'The name field is required.',
        'string.min': 'The name field must contain at least 2 characters.',
        'string.max': 'The name must contain a maximum of 12 characters.'
    }),

    surname: Joi.string().min(5).max(15).required().messages({
        'string.empty': 'The surname field must not be empty.',
        'any.required': 'The surname field is required.',
        'string.min': 'The surname field must contain at least 5 characters.',
        'string.max': 'The surname must contain a maximum of 15 characters.'
    }),

})

export const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body)

    if(error){
        const errorMessage = error.details[0].message
        return next(new appError(errorMessage, 400))
    }
    next()
}