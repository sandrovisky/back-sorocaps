const express = require('express')

const UserRoutes = express.Router()

const UserController = require('../controllers/UsersController')

UserRoutes.get('', UserController.index)
UserRoutes.post('/create/', UserController.store)
UserRoutes.delete('/:id/', UserController.delete)
UserRoutes.put('/:id/', UserController.update)

module.exports = UserRoutes