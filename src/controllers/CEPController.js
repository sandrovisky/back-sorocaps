const { default: axios } = require("axios")


module.exports = {

    async getData(req, res){
        const { cep } = req.body
        
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((result) => {
                console.log(result.data)
                return res.json(result.data) 
            })
            .catch((err) => {
                console.log(err)
                return res.status(400).json({message: "Verifique CEP informado."})
            })

        return response     
    },
}