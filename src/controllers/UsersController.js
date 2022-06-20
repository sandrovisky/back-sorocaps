const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    async index(req, res){
        const result = await User.findAll()
        console.log(result)
        return res.json(result)
    },

    async update(req, res){

        const { id } = req.params
        const { senha } = req.body 

        await User.update({ senha }, { where: { id } })
        .then(() => {
            res.status(200).json({message: "Cadastro atualizado com sucesso"});
            console.log({message: "Cadastro atualizado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao atualizar cadastro"});
            console.log({message: "Erro ao atualizar cadastro"});
        });
    },

    async delete(req, res){
        await User.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            user, 
            name,
            password
        } = req.body        

        if(password.length < 6)
            return res.status(400).json({ message: "Senha precisa ter ao mínimo 6 caracteres."})
        
        if(await User.findOne({ where: { user } }))
            return res.status(400).json({ message: "Usuário ja existe."})
        
        const passwordHash = bcrypt.hashSync(password, 10)

        await User.create({ user, name, password: passwordHash })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


