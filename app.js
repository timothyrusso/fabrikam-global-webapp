const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');
const config = require('./config.js');

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
 * Database connection
 */
if (process.env.NODE_ENV !== 'test') {
    const sequelize = new Sequelize(config.dbName, config.dbConfig.authentication.options.userName, config.dbConfig.authentication.options.password, {
        dialect: 'postgres',
        host: config.dbConfig.server,
        port: config.dbConfig.options.port || 5432,
        dialectOptions: {
          ssl: config.dbConfig.options.encrypt,
        },
        pool: {
          max: 10,
          min: 0,
          idle: 10000,
        },
      });
      
      sequelize.authenticate().then(() => {
        console.log('Connection to the database has been established successfully.');
      }).catch((error) => {
        console.error('Unable to connect to the database:', error);
      });
  }

/**
 * Start the server
 */
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => console.log('Server listening on port: ' + port));