import Joi from 'joi';

const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        firstname: Joi.string().min(3).max(100).required(),
        lastname: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(6).max(100).required().email(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error: error.details });
    }
    next();
};

const signInValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(100).required().email(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error: error.details });
    }
    next();
};

export { signUpValidation, signInValidation };
