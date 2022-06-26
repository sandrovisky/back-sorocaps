const { Model, DataTypes, literal } = require("sequelize")

class Log extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
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
            action: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            table: {
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
        }, {
            sequelize,
            tableName: "logs",
        })
    }

    static associate({ models }) {
      this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
}

module.exports = Log