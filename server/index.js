const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const EM=require('./models/database')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/database");

app.post('/register',(req,res)=>{
EM.create(req.body)
.then(database=>res.json(database))
.catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})