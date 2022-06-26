const User = require("../model/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

module.exports = {

    async login(req, res) {
        const { user, password } = req.body

        const result = await User.findOne({
            where: {
                user
            },
            attributes: ['id', 'user', 'password', 'name']
        })

        if (!result)
            return res.status(400).json({ message: "Verificar as credenciais de acesso." })

        if (!await bcrypt.compare(password, result.password))
            return res.status(400).json({ message: "Verificar as credenciais de acesso." })

        result.password = undefined

        const token = jwt.sign({ user: result }, process.env.HASH_JWT, {
            expiresIn: "8h" //8hrs
        })

        return res.json({ result, token })
    },
}