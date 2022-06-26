const express = require("express")
const routes = express.Router()

const auth = require("./middlewares/auth")

const UserRoutes = require("./routes/UserRoutes")
const LoginRoutes = require("./routes/LoginRoutes")
const CEPRoutes = require("./routes/CepRoutes")
const CustomerRoutes = require("./routes/CustomerRoutes")
const ProductRoutes = require("./routes/ProductRoutes")
const OrderRoutes = require("./routes/OrderRoutes")
const logging = require("./middlewares/logging")

routes.use("/cep/", auth, CEPRoutes)
routes.use("/users/", UserRoutes)
routes.use("/login/", LoginRoutes)
routes.use("/customers/", auth, CustomerRoutes)
routes.use("/products/", auth, logging, ProductRoutes)
routes.use("/orders/", auth, logging, OrderRoutes)


module.exports = routes;