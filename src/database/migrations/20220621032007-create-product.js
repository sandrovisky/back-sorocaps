"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
      measure:  {
        type: DataTypes.STRING,
        allowNull: false
      },
      buyValue:  {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      sellValue:  {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("products")
  }
};
