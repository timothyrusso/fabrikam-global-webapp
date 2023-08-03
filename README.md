# fabrikam-global-webapp

This is a Node js web application that run a server which can handle requests to a PostgreSQL database.
The database contain informations about the employees of the Fabrikam Global company.

## How to run it locally

- Clone the repository
- Install the dependencies `npm install`
- Set the environments variables `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`, `DB_HOST` and `DB_PORT`
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

### [joi](https://joi.dev/)

Necessary to validate the data that is sent to the server through HTTP requests. It ensures that the data is in the expected format and structure, which helps to prevent errors and improve the overall quality of the data.

### [cors](https://github.com/expressjs/cors)

It enable Cross-Origin Resource Sharing (CORS) in the application. CORS is a security feature implemented in web browsers to prevent client-side JavaScript code from making requests to a different domain than the one that served the web page.

### [pg](https://github.com/brianc/node-postgres)
The pg package is a PostgreSQL client for Node.js that allows the application to connect and interact with the PostgreSQL database.

### [pg-hstore](https://github.com/scarney81/pg-hstore)
The pg-hstore package is a Node.js module that allows the application to work with PostgreSQL's hstore data type. It provides a way to serialize and deserialize JavaScript objects to and from hstore format.

## Database and server

The database of this application is hosted in [elephantsql.com](https://elephantsql.com/)

This web application is hosted by [render.com](https://render.com/), at this endpoint: [https://fabrikam-global-webapp.onrender.com](https://fabrikam-global-webapp.onrender.com/)