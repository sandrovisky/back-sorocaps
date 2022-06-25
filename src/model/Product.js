const { Model, DataTypes, literal } = require("sequelize")

class Product extends Model {
    static init(sequelize) {
        super.init({
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
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            measure: {
                type: DataTypes.STRING,
                allowNull: false
            },
            buyValue: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            sellValue: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: true,
            tableName: "products",
        })
    }
}

module.exports = Product