const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    cik: String,
    val: Number,
    entity_name: String,
    tag_id: {type: mongoose.Schema.Types.ObjectId,
         ref: 'tag'}
})

const CompanyData = mongoose.model('CompanyData', DataSchema)

module.exports = CompanyData
