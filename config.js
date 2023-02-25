module.exports = {
  dbName: 'fabrikam',
  dbConfig: {
    server: process.env.SERVER_NAME,
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
