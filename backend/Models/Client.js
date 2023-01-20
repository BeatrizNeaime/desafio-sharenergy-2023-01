const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    cel: String,
    cpf: String,
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    uf: String
})

const Cliente = mongoose.model('clients', UsuarioSchema)

module.exports = Cliente