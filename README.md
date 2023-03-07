# fabrikam-global-webapp

This is a Node js web application that run a server which can handle requests to a Microsoft SQL database.
The database contain informations about the employees of the Fabrikam Global company.

## How to run it locally

- Clone the repository
- Install the dependencies `npm install`
- Set the environments variables `DB_USERNAME` and `DB_PASSWORD`
- Set your database name and your database server in the `config.js` file
- Run the server `npm run start`

## Endpoints

- Get all the informations of all the entities `GET` `/`
- Get all the main informations of all the entities `GET` `/main`
- Get all the informations of a entity `GET` `/:id`
- Create a new entity with a payload `POST` `/`
- Update an existing entity with a payload `PUT` `/:id`
- Delete an existing entity `DELETE` `/:id`

## Dependencies

### [express](https://expressjs.com/)

Necessary to handle HTTP requests, define the routes for the application, and send HTTP responses to clients.

### [dotenv](https://github.com/motdotla/dotenv)

To manage environment variables.

### [sequelize](https://sequelize.org/)

It is used to define models for the database tables, which helps in creating, updating, and querying the database using JavaScript code. It provides features such as validation, data type casting, and associations between tables.

### [tedious](https://tediousjs.github.io/tedious/index.html)

JavaScript implementation of the TDS (Tabular Data Stream) protocol, which is used by Microsoft SQL Server to communicate with client applications. Here, Tedious is used as the database driver to connect to and interact with the SQL Server database using Node.js.

### [joi](https://joi.dev/)

Necessary to validate the data that is sent to the server through HTTP requests. It ensures that the data is in the expected format and structure, which helps to prevent errors and improve the overall quality of the data.

### [cors](https://github.com/expressjs/cors)

It enable Cross-Origin Resource Sharing (CORS) in the application. CORS is a security feature implemented in web browsers to prevent client-side JavaScript code from making requests to a different domain than the one that served the web page.

## Database and server

The database of this application is hosted in the [Azure Cloud Service](https://azure.microsoft.com/it-it)

The database is in the Azure Cloud server at this endpoint: `fabrikam-server.database.windows.net`

This web application is hosted by [render.com](https://render.com/), at this endpoint: [https://fabrikam-global-webapp.onrender.com](https://fabrikam-global-webapp.onrender.com/)