import Joi from 'joi';

const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        firstname: Joi.string()
            .min(2)
            .max(50)
            .pattern(/^[a-zA-Z\s]+$/)
            .required()
            .messages({
                'string.min': 'First name must be at least 2 characters',
                'string.max': 'First name cannot exceed 50 characters',
                'string.pattern.base': 'First name can only contain letters and spaces',
                'any.required': 'First name is required'
            }),
        lastname: Joi.string()
            .min(2)
            .max(50)
            .pattern(/^[a-zA-Z\s]+$/)
            .required()
            .messages({
                'string.min': 'Last name must be at least 2 characters',
                'string.max': 'Last name cannot exceed 50 characters',
                'string.pattern.base': 'Last name can only contain letters and spaces',
                'any.required': 'Last name is required'
            }),
        email: Joi.string()
            .email()
            .max(100)
            .required()
            .messages({
                'string.email': 'Please enter a valid email address',
                'string.max': 'Email cannot exceed 100 characters',
                'any.required': 'Email is required'
            }),
        password: Joi.string()
            .min(6)
            .max(100)
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
            .required()
            .messages({
                'string.min': 'Password must be at least 6 characters',
                'string.max': 'Password cannot exceed 100 characters',
                'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
                'any.required': 'Password is required'
            })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            message: "Validation failed", 
            success: false,
            errors: error.details.map(detail => ({
                field: detail.path[0],
                message: detail.message
            }))
        });
    }
    next();
};

const signInValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.email': 'Please enter a valid email address',
                'any.required': 'Email is required'
            }),
        password: Joi.string()
            .min(1)
            .required()
            .messages({
                'any.required': 'Password is required'
            })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            message: "Validation failed", 
            success: false,
            errors: error.details.map(detail => ({
                field: detail.path[0],
                message: detail.message
            }))
        });
    }
    next();
};

const paymentValidation = (req, res, next) => {
    const schema = Joi.object({
        amount: Joi.number()
            .positive()
            .precision(2)
            .required()
            .messages({
                'number.positive': 'Amount must be greater than 0',
                'any.required': 'Amount is required'
            }),
        currency: Joi.string()
            .valid('INR', 'USD', 'EUR')
            .default('INR'),
        receipt: Joi.string()
            .max(40)
            .optional(),
        order_details: Joi.object().optional()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            message: "Validation failed", 
            success: false,
            errors: error.details.map(detail => ({
                field: detail.path[0],
                message: detail.message
            }))
        });
    }
    next();
};

export { signUpValidation, signInValidation, paymentValidation };