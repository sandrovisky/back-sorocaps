"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("logs", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId:  {
        type: DataTypes.INTEGER,
        references: {
          model: "users", 
          key: "id"
        }
      },
      path: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      table: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      action: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      params: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("logs")
  }
};
