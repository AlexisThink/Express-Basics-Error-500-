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
		Jobs
			.findById(request.params.jobID)
			.then(data => {
				response
					.status(200)
					.json({
						request: "Completed Succesfuly",
						data: data
					})
			})

    },

    create:(request, response) => {
		const newJob = new Job({
			_id: new mongoose.Types.ObjectId,
			title:resquest.body.title,
			years: request.body.years,
			company: request.body.company
		});

		newJob
			.save()
			.then(data =>{
				response
				.satatus(201)
				.json({
					data: data
				})
			})
    },

    update: (request, response) => {
		Job
			.findByIdAndRemove(request.params.jobID, request.body, {new: true})
			.then(data => {
				response
					.status(200)
					.json({
						resquest: "Completed Succesfuly",
						data: data
					})
			})
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