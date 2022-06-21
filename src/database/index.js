const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Customer = require('../model/Customer')
const User = require('../model/User')

const connection = new Sequelize(dbConfig)

User.init(connection)
Customer.init(connection)

module.exports = connection