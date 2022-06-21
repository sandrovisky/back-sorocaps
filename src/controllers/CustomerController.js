const Customer = require('../model/Customer')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    async index(req, res) {
        const result = await Customer.findAll()
        console.log(result)
        return res.json(result)
    },

    async store(req, res) {
        const {
            socialName,
            cnpj,
            cep,
            city,
            uf,
            district,
            street,
            complement,
            number
        } = req.body

        await Customer.create({
            socialName,
            cnpj,
            cep,
            city,
            uf,
            district,
            street,
            complement,
            number
        })
            .then(response => {
                return res.status(200).json(response)
            })
    }
}


