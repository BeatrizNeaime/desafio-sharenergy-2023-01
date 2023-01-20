const express = require('express')
const routes = express.Router()
const ClientController = require('../Controllers/Client')

/*--- GET TODOS OS CLIENTES ---*/
routes.get('/clientes', ClientController.index)

/*--- ADD CLIENTE ---*/
routes.post('/clientes', ClientController.store)

/*-- GET BY USERNAME/NOME ---*/
routes.get('/clientes/:_id', ClientController.username)

/*--- UPDATE CLIENTE ---*/
routes.patch('/clientes/:_id', ClientController.update)

/*--- DELETE CLIENTE ---*/
routes.delete('/clientes/:_id', ClientController.delete)

module.exports = routes