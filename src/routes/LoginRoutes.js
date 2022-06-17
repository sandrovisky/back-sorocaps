const express = require('express')

const loginRoutes = express.Router()

const auth = require('../middlewares/auth')

const LoginController = require('../controllers/LoginController')

loginRoutes.get('', auth, LoginController.validarLogin)
loginRoutes.post('', LoginController.login)

module.exports = loginRoutes