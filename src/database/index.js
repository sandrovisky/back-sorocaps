const Sequelize = require("sequelize")
const dbConfig = require("../config/database")

const Customer = require("../model/Customer")
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const OrderItem = require("../model/OrderItem")

const connection = new Sequelize(dbConfig)

User.init(connection)
Customer.init(connection)
Product.init(connection)
Order.init(connection)
OrderItem.init(connection)

Customer.associate(connection)
Order.associate(connection)
OrderItem.associate(connection)

module.exports = connection