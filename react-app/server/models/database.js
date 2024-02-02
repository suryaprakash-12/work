const mongoose =require('mongoose')
const ES=new mongoose.Schema({
    name:'string',
    email:'string',
    password:'string'
})
const EM=mongoose.model("database",ES)
module.exports=EM