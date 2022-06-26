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
      status: {        
        type: DataTypes.INTEGER,
        // 0 = em processo
        // 1 = aprovado
        defaultValue: 0,
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
    this.belongsTo(models.Customer, { foreignKey: "customerId", as: "customer" });
    this.hasMany(models.OrderItem, { foreignKey: "orderId", as: "itens" })
  }
}

module.exports = Order