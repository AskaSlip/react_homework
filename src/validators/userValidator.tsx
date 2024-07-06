import Joi from "joi";

const userValidator =
    Joi.object({
        userId: Joi.number()
            .min(1)
            .max(10)
            .required()
            .messages({
                "number.min": "min value is 1",
                "number.max": "max value is 10"
            }),

        title: Joi.string()
            .pattern(/^.{5,}$/)
            .required()
            .messages({
                "string.empty": "title cannot be empty",
                "string.pattern.base": "title cannot be shorter than 5 characters"
            }),
        body: Joi.string()
            .required()
            .pattern(/^.{10,}$/)
            .messages({
                "string.empty": "this area cannot be empty",
                "string.pattern.base": "title cannot be shorter than 10 characters"
            })
        })

     export default userValidator;
