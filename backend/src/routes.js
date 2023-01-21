const express = require('express')
const routes = express.Router()
const ClientController = require('../Controllers/Client')
const Login = require('../Controllers/Login')


/*--- GET TODOS OS CLIENTES ---*/
routes.get('/clientes', ClientController.index)

/*--- ADD CLIENTE ---*/
routes.post('/clientes', ClientController.store)

/*-- GET BY ID ---*/
routes.get('/clientes/:_id', ClientController.username)

/*-- GET BY USERNAME --*/
routes.get('/clientes/:email', ClientController.email)

/*--- UPDATE CLIENTE ---*/
routes.put('/clientes', ClientController.update) 

/*--- DELETE CLIENTE ---*/
routes.delete('/clientes/:_id', ClientController.delete)
 
/*--- POST LOGIN ---*/  
routes.post('/login', Login.login)

module.exports = routes