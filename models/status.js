const { Schema, model } = require('mongoose')

const status = Schema({
    status: String,
})


module.exports = model('status', status)