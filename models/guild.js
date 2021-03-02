const { Schema, model } = require('mongoose')

const guild = Schema({
    guildID: String,
    ticketCount: String,
})


module.exports = model('guild', guild)