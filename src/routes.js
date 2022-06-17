const express = require('express')
const routes = express.Router()

const UsuariosRoutes = require('./routes/UsuariosRoutes')
const LoginRoutes = require('./routes/LoginRoutes')

const auth = require('./middlewares/auth')

routes.use('/usuarios', UsuariosRoutes)
routes.use('/login', LoginRoutes)

module.exports = routes;