const { Schema, model } = require("mongoose")

const ticket = Schema({
    guildID: String,
    userID: String,
    channelID: String,
    msgID: String,
    ticket: String,
})

module.exports = model('ticket', ticket)