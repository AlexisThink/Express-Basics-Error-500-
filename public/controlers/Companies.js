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
    }
}

module.exports = Controller;

// interfaz grafica para testear
// diferentes peticiones (delete post y put)