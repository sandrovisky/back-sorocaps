const express = require("express")

const CEPRoutes = express.Router()

//const auth = require("../middlewares/auth")

const CEPController = require("../controllers/CEPController")

CEPRoutes.post("", CEPController.getData)

module.exports = CEPRoutes