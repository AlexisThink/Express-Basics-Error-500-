const {Router} = require('express');
const app = Router();

const Companies = require('../controlers/Companies');

app.get('/api/companies', Companies.index);
app.get('/api/companies/:companyID', Companies.getById);
app.post('/api/companies', Companies.tryPost);
app.put('/api/companies', Companies.tryPut);
app.delete('/api/companies', Companies.tryDelete);

module.exports = app;