const { Model, DataTypes } = require("sequelize")

class Order extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "customers",
          key: "id"
        }
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      tableName: "orders",
    })
  }

  static associate({ models }) {
    this.hasOne(models.Customer, { foreignKey: "id", as: "customer" });
    this.hasMany(models.OrderItem, { foreignKey: "orderId", as: "itens" })
  }
}

module.exports = Order