"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      socialName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cnpj:  {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      cep:  {
        type: DataTypes.STRING,
        allowNull: false
      },
      city:  {
        type: DataTypes.STRING,
        allowNull: false
      },
      uf:  {
        type: DataTypes.STRING,
        allowNull: false
      },
      district:  {
        type: DataTypes.STRING,
        allowNull: false
      },
      street:  {
        type: DataTypes.STRING,
        allowNull: false
      },
      complement:  {
        type: DataTypes.STRING,
      },
      number: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("customers")
  }
};
