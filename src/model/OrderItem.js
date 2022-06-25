const { Model, DataTypes, literal } = require("sequelize")

class OrderItem extends Model {
  static init(sequelize) {
    super.init({
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "orders",
          key: "id"
        }
      },
      productId: {
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
    }, {
      sequelize,
      timestamps: true,
      tableName: "order_item",
    })
  }

  static associate({ models }) {
    this.belongsTo(models.Order, { foreignKey: "orderId", as: "order" });
    this.belongsTo(models.Product, { foreignKey: "productId", as: "product" });
  }
}

module.exports = OrderItem