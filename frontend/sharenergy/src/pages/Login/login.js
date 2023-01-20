const fazerLogin = ({ user, pwd, log }) => {
    const sessions = require("express-session");
    const cookieParser = require("cookie-parser");
    const uuidv4 = require('uuid').v4;

    sessions({
        secret: "thisIsMySecretKey",
        saveUninitialized: true,
        resave: false,
        name: 'Cookie de Sessao',
        cookie: { maxAge: 1000 * 60 * 3 }
    })

}

export default fazerLogin