const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const LoginSchema = new mongoose.Schema({
    user: { type: String, unique: true },
    senha: String,
    token: String
})

LoginSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt()
    this.senha = await bcrypt.hash(this.senha, salt)
    next()
})

async function log(user, senha) {
    const usuario = await this.finOne({ user })
    if (usuario) {
        const auth = await bcrypt.compare(senha, usuario.senha)
        if (auth) {
            return usuario
        } else {
            throw Error("Senha incorreta!")
        }
    } else {
        throw Error("Usuário incorreto!")
    }
}

const Login = mongoose.model('login', LoginSchema)
module.exports = Login