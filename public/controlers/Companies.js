const companies = require('../../companies.json');

const Controller = {
    index: (request, response) =>{
      response
        .status(200)
        .json({
            companies
          });
        },

    getById: (request, response) =>{
      const theCompany = companies.data.filter(company => {
        return company.id === parseInt(request.params.companyID)
      });

      if(theCompany.length){
        response
          .status(200)
          .json({
            data: theCompany[0]
          })
      } else {
        response
        .json({
          message: 'Not Company Found'
        })
      }
    },

    tryPost:(request, response) =>{
      response
        .status(200)
        .json({
          mess: "Hola desde Post",
          data: request.body
        })
    },

    tryPut:(request, response) =>{
      response
        .status(200)
        .json({
          mess: "Hola desde Put",
          data: request.body
        })        
    },

    tryDelete:(request, response) =>{
      response
        .status(200)
        .json({
          mess: "Hola desde Delete",
          data: request.body
        })      
    }


}

module.exports = Controller;

// FRAMEWORK TO TEST REQUEST
// REQUEST (DELETE, PUT, POST)
// CORS