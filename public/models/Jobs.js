const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    years: Number,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'}
});

module.exports = mongoose.model('Jobs', Schema)