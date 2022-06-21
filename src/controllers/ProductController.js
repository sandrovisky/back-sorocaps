const Product = require("../model/Product")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

module.exports = {

    async index(req, res) {
        const result = await Product.findAll()
        console.log(result)
        return res.json(result)
    },

    async store(req, res) {
        const {
            code,
            description,
            measure,
            buyValue,
            sellValue,
        } = req.body
        
        if(await Product.findOne({ where: { code } }))
            return res.status(400).json({ message: "Código já cadastrado!" })
        
        if (buyValue > sellValue) {
            return res.status(400).json({ message: "Valor de venda não pode ser menor que o valor de compra!" })
        }

        await Product.create({
            code,
            description,
            measure,
            buyValue,
            sellValue
        })
            .then(response => {
                return res.status(200).json(response)
            })
    }
}


