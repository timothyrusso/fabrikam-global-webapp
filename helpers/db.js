// const tedious = require('tedious');
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
  const dialect = 'postgres';
  const host = dbConfig.host;
  const port = dbConfig.options.port || 5432;
  const { userName, password } = dbConfig.authentication.options;

  /**
   * Connect to the db
   */
  const sequelize = new Sequelize(dbName, userName, password, {
    host,
    port,
    dialect,
    dialectOptions: {
      ssl: dbConfig.ssl,
    },
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
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