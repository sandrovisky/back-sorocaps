const express = require('express')
const routes = express.Router()

const UsersRoutes = require('./routes/UsersRoutes')
const LoginRoutes = require('./routes/LoginRoutes')

const auth = require('./middlewares/auth')

routes.use('/users/', UsersRoutes)
routes.use('/login/', LoginRoutes)

module.exports = routes;