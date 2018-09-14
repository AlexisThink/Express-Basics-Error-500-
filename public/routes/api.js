const {Router} = require('express');
const app = Router();

const Companies = require('../controlers/Companies');
const Jobs = require('../controlers/Jobs');

//ENDPOINTS COMPANY
app.get('/api/companies', Companies.index);
app.get('/api/companies/:companyID', Companies.getById);
app.post('/api/companies', Companies.tryPost);
app.put('/api/companies/:companyID', Companies.tryPut);
app.delete('/api/companies/:companyID', Companies.tryDelete);

//ENDPOINT JOBS
app.get('/api/jobs', Jobs.index);
app.get('/api/jobs/:jobID', getByID);
app.post('/api/jobs', Jobs.create);
app.put('/api/jobs/:jobID', Jobs.update)
app.delete('/api/jobs/:jobID', Jobs.remove);





module.exports = app;