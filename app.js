/* Import the modules. */
const express = require('express');
const morgan = require('morgan')

/* Absolute Path to HTML file. */
const indexFile = `${ __dirname }/index.html`;

/**
 * [1] Create and instantiate the Node server.
 * [2] The callback function will act like a Listener, it will execute each time
 *     a request is done.
 */
const app = express();
const PORT = process.env.PORT || 3000;

//MILDDWARE
app.use(morgan('dev'));

//ROUTES
app.get('/', (request, response) => {
  response.sendFile(indexFile);
});

//404
app.use((request, response) =>{
  const ERROR = {
    message: '404. Not Found'
  };

  response
    .status(404)
    .json(ERROR)
})

//500
app.use((error, request, response, next) => {

  response
  .status(500)
  .send('Something broke!');
});

/**
 * Run and listen the server on an specific port.
 */
app.listen(PORT, () => {console.log("Server correct, running in port " + PORT)});
