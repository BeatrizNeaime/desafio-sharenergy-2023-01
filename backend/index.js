const express = require('express')
//const cookieParser = require('cookieParser')
const cors = require('cors')
const path = require('path')
const routes = require('./src/routes')
const mongoose = require('mongoose')

const app = express() 
const port = 3001
 
mongoose.connect('mongodb+srv://sharenergy:teste2023@sharenergy.cutibac.mongodb.net/test',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function(err){
    if(err){
        console.log(err)
    } else{
        console.log('MongoDB connected')
    }
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
}) 