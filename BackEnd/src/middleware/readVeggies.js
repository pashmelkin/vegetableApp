const config = require('../../config')
const data = require('../datalayer/readData.js')

module.exports.readVeggies = () => data.readData(config.connectionString)
