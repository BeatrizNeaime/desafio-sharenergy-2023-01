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
         const { username } = req.params
         const users = await Cliente.findOne({ username })
         res.json(users)
     },

     async delete(req, res) {
         const { _id } = req.params
         const del = await Cliente.findByIdAndDelete(_id)
         res.json(del)
     }
 }

