"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customerId:  {
        type: DataTypes.INTEGER,
        references: {
          model: "customers", 
          key: "id"
        }
      },
      status: {        
        type: DataTypes.INTEGER,
        // 0 = em processo
        // 1 = aprovado
        default: 0,
      },
      total:  {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders")
  }
};
