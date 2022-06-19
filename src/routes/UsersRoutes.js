const express = require('express')

const UsersRoutes = express.Router()

const UsersController = require('../controllers/UsersController')

UsersRoutes.get('', UsersController.index)
UsersRoutes.post('/create', UsersController.store)
UsersRoutes.delete('/:id', UsersController.delete)
UsersRoutes.put('/:id', UsersController.update)

module.exports = UsersRoutes