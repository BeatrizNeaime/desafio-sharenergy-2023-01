const Login = require('../Models/Login')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const duracao = 3 * 24 * 60 * 60

const createToken = (id) => {
    return jwt.sign({ id }, "sharenergy challenge twenty-twentythree", {
        expiresIn: duracao
    })
}

module.exports = {

    async login(req, res) {
        const { user, senha } = req.body;
        const usuario = await Login.findOne({ user })
        if (!usuario) {
            return res.json({ error: "Usuário não encontrado" })
        } else {
            if (await bcrypt.compare(senha, usuario.senha)) {
                const tok = createToken(usuario._id)
                if (res.status(201)) {
                    return res.json({ status: "ok", data: tok })
                } else {
                    return res.json({ error: "error" })
                }
            } else{
                return res.json({ error: "Senha incorreta!" })
            }
        }

    }
}