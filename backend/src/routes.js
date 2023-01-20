const express = require('express')
const routes = express.Router()
const ClientController = require('../Controllers/Client')

/*--- GET TODOS OS CLIENTES ---*/
routes.get('/clientes', ClientController.index)

/*--- ADD CLIENTE ---*/
routes.post('/clientes', ClientController.store)

/*-- GET BY USERNAME/NOME ---*/
routes.get('/clientes/:username', ClientController.username)

/*--- DELETE CLIENTE ---*/
routes.delete('/editar-cliente/:_id', ClientController.delete)

module.exports = routes