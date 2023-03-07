const express = require('express');
const app = express();
const cors = require('cors');

const errorHandler = require('./middleware/error-handler');

/**
 * Middlewares which are used to parse incoming JSON payloads and URL-encoded payloads
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Enable cors for all the possible endpoints
 */
app.use(cors());

/**
 * API routes
 */
app.use('/', require('./users/user.controller'));

/**
 * Use a global error handler
 */
app.use(errorHandler);

/**
 * Start the server
 */
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port: ' + port));