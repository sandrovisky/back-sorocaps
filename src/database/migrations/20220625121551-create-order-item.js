"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("order_item", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderId:  {
        type: DataTypes.INTEGER,
        references: {
          model: "orders", 
          key: "id"
        }
      },
      productId:  {
        type: DataTypes.INTEGER,
        references: {
          model: "products", 
          key: "id"
        }
      },
      soldValue: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("order_item")
  }
};
