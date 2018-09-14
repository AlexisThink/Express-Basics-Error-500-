const mongoose = require('mongoose');
const Job = require('../models/Jobs');

const Controller = {
    index: (request, response) => {
        Job
            .find()
            .exec()
            .then(jobs => {
                response
                    .status(200)
                    .json({
                        data: jobs
                    })
            })
    },

    getByID: (request, response) => {

    },

    create: (request, response) => {
        const newJob = new Job({
            _id: new mongoose.Types.ObjectId,
            title:resquest.body.title,
            years: request.body.years,
            company: request.body.companyID
        })

        newJob
        .save()
        .then(newRecord =>{
            response
            .satatus(200)
            .json({
                data: newRecord
            })
        })
    },

    update: (request, response) => {

    },

    remove: (request, response) => {
        Job
        .findByIdAndDelete(request.params.jobID)
        .json({
            message: 'Job Deleted'
        })
    }
}

module.exports = Controller;