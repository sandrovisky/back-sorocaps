const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    async login(req, res){
        const { user, password } = req.body

        const result =  await User.findOne({
            where: {
                user
            }
        })
    
        if(!result)
            return res.status(400).json({message: "Verificar as credenciais de acesso."})

        if (!await bcrypt.compare(password, result.password))
            return res.status(400).json({message: "Verificar as credenciais de acesso."})

        result.password = undefined

        const token = jwt.sign({ id: result.id}, process.env.HASH_JWT, {
            expiresIn: "8h" //8hrs
        })

        return res.json({ result , token })        
    },

    async validarLogin(req, res){
        const id = req.idUser

        const result =  await User.findByPk(id)
        result.senha = undefined
        return res.json(result)    
        
    }
}