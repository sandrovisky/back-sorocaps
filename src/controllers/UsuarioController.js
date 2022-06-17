const Usuario = require('../model/Usuario')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    async index(req, res){
        const result =  await Usuario.findAll()
        return res.json(result)
    },

    async update(req, res){

        const { id } = req.params
        const { senha } = req.body 

        await Usuario.update({ senha }, { where: { id } })
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

        await Usuario.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            email, 
            senha
        } = req.body        

        if(senha.length < 6)
            return res.status(400).json({ message: "Senha precisa ser ao minimo 6 caracteres."})
        
        if(await Usuario.findOne({ where: { email } }))
            return res.status(400).json({ message: "Usuario ja cadastrado."})
        
        const senhaHash = bcrypt.hashSync(senha, 10)

        await Usuario.create({ email, senha: senhaHash })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


