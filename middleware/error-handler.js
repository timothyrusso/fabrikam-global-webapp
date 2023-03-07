module.exports = errorHandler;

/**
 * Handle errors that occur during the request/response cycle.
 * If an error occurs, it checks the type of the error and returns an appropriate response to the client. 
 * If the error is a custom application error (of type string), it returns a JSON response with a status 
 * code of either 404 (if the error message indicates that the requested resource was not found) or 400 
 * (if the error message is a generic error message). If the error is not a custom application error, it returns a 
 * JSON response with a status code of 500 and the error message.
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns JSON response with an appropriate status code and error message
 */
function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err });
        default:
            return res.status(500).json({ message: err.message });
    }
}