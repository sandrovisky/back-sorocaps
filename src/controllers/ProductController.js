const Product = require("../model/Product")
const Order = require("../model/Order");

module.exports = {

    async index(req, res) {
        const result = await Product.findAll()
        console.log(result)
        return res.json(result)
    },

    async store(req, res) {
        let {
            code,
            description,
            measure,
            buyValue,
            sellValue,
        } = req.body

        code = code.trim()
        
        if(await Product.findOne({ where: { code } }))
            return res.status(400).json({ message: "Código já cadastrado!" })
        
        if (buyValue > sellValue) {
            return res.status(400).json({ message: "Valor de venda não pode ser menor que o valor de compra!" })
        }

        await Product.create({
            code: code.trim(),
            description: description.trim(),
            measure: measure.trim(),
            buyValue: buyValue.trim(),
            sellValue: sellValue.trim(),
        })
            .then(response => {
                return res.status(200).json(response)
            })
    }
}


