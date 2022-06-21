const express = require('express')

const ProductRoutes = express.Router()

const ProductController = require('../controllers/ProductController')

ProductRoutes.get('', ProductController.index)
ProductRoutes.post('/create/', ProductController.store)

module.exports = ProductRoutes