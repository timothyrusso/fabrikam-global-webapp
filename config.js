require('dotenv').config();

module.exports = {
  dbName: process.env.DB_NAME,
  dbConfig: {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    ssl: {
        require: true,
        rejectUnauthorized: true
      },
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    authentication: {
      type: 'default',
      options: {
        userName: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
    },
    options: {
      port: process.env.DB_PORT,
    },
  },
};
