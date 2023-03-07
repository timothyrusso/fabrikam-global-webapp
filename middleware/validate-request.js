module.exports = validateRequest;

/**
 * Middleware function that validates incoming requests against a Joi schema,
 * using the schema.validate method. If there are any validation errors, 
 * it passes the error message to the next function as an argument, 
 * which triggers the global error handler. If there are no errors, 
 * it sets the req.body to the validated value and calls the next 
 * function to move to the next middleware or route handler.
 * @param {*} req 
 * @param {*} next 
 * @param {*} schema 
 */
function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

/**
 * The options object is used to configure the behavior of the validation process. It includes the following properties:
 * abortEarly: a boolean value that determines whether the validation process should stop on the first error encountered or continue and report all errors.
 * allowUnknown: a boolean value that determines whether to allow unknown properties in the input object that are not defined in the schema.
 * stripUnknown: a boolean value that determines whether to remove unknown properties from the input object that are not defined in the schema.
 */