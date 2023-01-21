const Cliente = require('../Models/Client')

 module.exports = {
     async index(req, res) {
         const clientes = await Cliente.find()
         res.json(clientes)
     },

     async store(req, res) {
         const add = await Cliente.create(req.body)
         res.json(add)
     },

     async username(req, res) {
         const { _id } = req.params
         const users = await Cliente.findOne({ _id })
         res.json(users)
     },

     async email(req,res){
        const { email } = req.params
         const users = await Cliente.findOne({ email })
         res.json(users)
     },

     async delete(req, res) {
         const { _id } = req.params
         const del = await Cliente.findByIdAndDelete(_id)
         res.json(del)
     },

     async update(req, res) {
        const { _id, firstName, lastName, email, cel, cpf, rua, numero, bairro, cidade,uf } = req.body
        let atualizar = {}

        atualizar = {
            firstName,
            lastName,
            email,
            cel,
            cpf,
            rua,
            numero,
            bairro,
            cidade,
            uf
        }

        const updated = await Cliente.findByIdAndUpdate({_id}, atualizar, {new: true})
        res.json(updated)
    }
 }
 
