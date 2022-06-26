const express = require("express")

const OrderRoutes = express.Router()

const OrderController = require("../controllers/OrderController")

OrderRoutes.get("", OrderController.index)
OrderRoutes.post("/create/", OrderController.store)
OrderRoutes.patch("/approve/", OrderController.approve)

module.exports = OrderRoutes