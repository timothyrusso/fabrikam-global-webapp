require('dotenv').config();

module.exports = {
  dbName: 'fabrikam-production',
  dbConfig: {
    server: 'fabrikam-server.database.windows.net',
    options: {
      port: 1433,
      trustServerCertificate: true,
      encrypt: true,
    },
    authentication: {
      type: 'default',
      options: {
        userName: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      },
    },
  },
};
