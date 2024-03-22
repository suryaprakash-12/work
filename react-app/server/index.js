const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const EM=require('./models/database')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sonydoni73:Suryaprakash@cluster0.nsn38ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post('/register',async(req,res)=>{
EM.create(req.body)
.then(database=>res.json(database))
.catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})