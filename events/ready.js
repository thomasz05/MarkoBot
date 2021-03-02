const { dbuser, dbpass } = require('../config.json')
const { connect } = require('mongoose')

const url = `mongodb+srv://thomas:${dbpass}@cluster0.a3n4g.mongodb.net/${dbuser}?retryWrites=true&w=majority`

module.exports = (client) => {
    console.log('MongoDB is connecting.')

    connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }).then(console.log('MongoDB is connected.'))
}