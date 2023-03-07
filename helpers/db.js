const tedious = require('tedious');
const { Sequelize } = require('sequelize');

const config = require('../config.js');
const { dbName, dbConfig } = config;

module.exports = db = {};

/**
 * Setting up the database connection.
 * It is called before its definition because the module.exports statement is 
 * executed immediately as soon as the module is loaded, which in turn invokes the initialize() function
 */
initialize();

async function initialize() {
  const dialect = 'mssql';
  const host = dbConfig.server;
  const { userName, password } = dbConfig.authentication.options;

  /**
   * Create db if it doesn't already exist
   */
  await ensureDbExists(dbName);

  /**
   * Connect to the db
   */
  const sequelize = new Sequelize(dbName, userName, password, {
    host,
    dialect,
  });

  /**
   * Init models and add them to the exported db object
   */
  db.User = require('../users/user.model')(sequelize);

  /**
   * Sync all models with database
   */
  await sequelize.sync({ alter: true });
}

async function ensureDbExists(dbName) {
  return new Promise((resolve, reject) => {
    const connection = new tedious.Connection(dbConfig);
    connection.connect((err) => {
      if (err) {
        console.error(err);
        reject(`Connection Failed: ${err.message}`);
      }

      /**
       * Send a T-SQL query to create the database if it does not already exist
       */
      const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
      const request = new tedious.Request(createDbQuery, (err) => {
        if (err) {
          console.error(err);
          reject(`Create DB Query Failed: ${err.message}`);
        }

        /**
         * Query executed successfully
         */
        resolve();
      });

      /**
       * Method call that executes an SQL query using the request object and the connection object. 
       * The execSql method sends the query to the database server and retrieves the results.
       */
      connection.execSql(request);
    });
  });
}
