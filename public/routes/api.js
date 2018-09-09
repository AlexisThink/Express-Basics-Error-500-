const {Router} = require('express');
const app = Router();

const Companies = require('../controlers/Companies');

app.get('/api/companies', Companies.index);
app.get('/api/companies/:companyID', Companies.getById);


module.exports = app;