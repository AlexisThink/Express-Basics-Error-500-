/* Import the modules. */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const api = require('./public/routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

/*MIDDLEWARE*/
app.use(morgan('dev'));
app.use('/static', express.static('public'));
//TEMPLATE VIEWS, PUG
app.set('views', __dirname + '/src/views');
app.set('view engine', 'pug');
//BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*-----------------------------------------------------*/

/*ROUTES*/
app.get('/', (request, response) => {
  response.render('main', {
    title: 'LinkedIn REST API',
    subtitle: 'API Reference'
  })
});

app.use((request, response, next)=>{
  response.header('Access-Crontrol-Allow-Origin','*');
  response.header('Access-Crontrol-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  next();
});

app.options('*', (request, response, next) =>{
  response.header('Acces-Controll-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.send(200);
  next();
})
//ENDPOINT OF API
app.use('/api/v1/', api);

/*-----------------------------------------------------*/

//ERROR 404 | NOT FOUND
app.use((request, response,) =>{
  const error = {
    message: '404. Not Found'
  };

  response
    .status(404)
    .json(error)
})

//ERROR 500 | THE SERVER CANT RESPONSE
app.use((error, request, response, next) => {
  response
  .status(500)
  .send('Something broke!');
});

//RUN SERVICE IN ESPECIFIC PORT AND A MESSAGE TO NOTIFY
app.listen(PORT, () => {console.log("Server correct, running in port " + PORT)});