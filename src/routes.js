const express = require('express')
const routes = express.Router()

const auth = require('./middlewares/auth')

const UserRoutes = require('./routes/UserRoutes')
const LoginRoutes = require('./routes/LoginRoutes')
const CEPRoutes = require('./routes/CepRoutes')
const CustomerRoutes = require('./routes/CustomerRoutes')

routes.use('/cep/', CEPRoutes)
routes.use('/users/', UserRoutes)
routes.use('/login/', LoginRoutes)
routes.use('/customers/', CustomerRoutes)

module.exports = routes;