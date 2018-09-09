/* Import the modules. */
const express = require('express');
const morgan = require('morgan');
const api = require('./public/routes/api');

/**
 * [1] Create and instantiate the Node server.
 * [2] The callback function will act like a Listener, it will execute each time
 *     a request is done.
 */
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/src/views');
app.set('view engine', 'pug');
//MILDDWARE
app.use(morgan('dev'));
app.use('/static', express.static('public'));


//ROUTES
app.get('/', (request, response) => {
  response.render('main', {
    title: 'LinkedIn REST API',
    subtitle: 'API Reference'
  })
});

app.use('/api/v1/', api)

//404
app.use((request, response) =>{
  const ERROR = {
    message: '404. Not Found'
  };

  response
    .status(404)
    .json(ERROR)
})

500
app.use((error, request, response, next) => {

  response
  .status(500)
  .send('Something broke!');
});

//Run and listen the server on an specific port.
app.listen(PORT, () => {console.log("Server correct, running in port " + PORT)});