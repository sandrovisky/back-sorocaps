const { Model, DataTypes, literal } = require("sequelize")

class Customer extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            socialName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cnpj: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            cep: {
                type: DataTypes.STRING,
                allowNull: false
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            uf: {
                type: DataTypes.STRING,
                allowNull: false
            },
            district: {
                type: DataTypes.STRING,
                allowNull: false
            },
            street: {
                type: DataTypes.STRING,
                allowNull: false
            },
            complement: {
                type: DataTypes.STRING,
            },
            number: DataTypes.INTEGER,
        }, {
            sequelize,
            timestamps: true,
            tableName: "customers",
        })
    }
}

module.exports = Customer