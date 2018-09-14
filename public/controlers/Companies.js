const mongoose = require('mongoose');
const Company = require('../models/Company');

const Controller = {

//SEE ALL INFORMATION
  index: (request, response) =>{
    Company
      .find()
      .exec()
      .then(data => {
        response
          .status(200)
          .json({
            companies: data
          })
      }
    )
  },

//VIEW ONLY THE COINCIDENS OF THE ID
  getById: (request, response) =>{
    Company
    .findById(request.params.companyID)
    .then(data => {
      response
        .status(200)
        .json({
          type: 'Company Found',
          data: data
        })
    })

    .catch(error => {
      response
        .status(500)
        .json({
            message: error
        })
      }
    );
  },

//ADD NEW INFO TO THE DB
  tryPost:(request, response) =>{
    const newCompany = new Company({
      _id: new mongoose.Types.ObjectId(),
      name: request.body.name
    });

    newCompany
      .save()
      .then(data =>{
        response
          .status(201)
          .json({
            data
          })
      })

      .catch(error => {
        response
          .status(500)
          .json({
            message: error
          })
      });

    console.log('raw record: ', newCompany)
  },

//UPDATE A VALUE
  tryPut:(request, response) =>{
    Company
    .findByIdAndUpdate(request.params.companyID, request.body, {new: true})
    .then(data => {
      response
        .status(200)
        .json({
            type: 'Company Updated',
            data: data
        })
    })
    .catch(error => {
        console.log(`caught the error: ${error}`);
        return res.status(500).json(error);
    });
  },

//DELETE ELEMENT  
  tryDelete:(request, response) =>{
    Company
      .findByIdAndRemove(request.params.companyID)
      .then(data => {
        response
          .status(200)
          .json({
              type: 'Company Deleted',
              data: data
          })
      })

      .catch(err => {
        console.log(`caught the error: ${err}`);
        return res.status(500).json(err);
    });      
  }
}
module.exports = Controller;