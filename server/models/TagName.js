const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    tag: String,
    
})

const TagName = mongoose.model('TagName', TagSchema)

module.exports = TagName
