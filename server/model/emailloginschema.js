const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const emailoginschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true

    }, 
    address:{
        type:String,
        required:true
    }, 
    phoneno:{
         type:String,
        required:true
    }
})

const emaillogindata = new mongoose("user_table",emailoginschema)

module.exports = emaillogindata