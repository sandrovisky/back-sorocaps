const express = require('express')

const CustomerRoutes = express.Router()

const CustomerController = require('../controllers/CustomerController')

CustomerRoutes.get('', CustomerController.index)
CustomerRoutes.post('/create/', CustomerController.store)

module.exports = CustomerRoutes