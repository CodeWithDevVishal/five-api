const mongoose = require("mongoose")

const bankSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    accountNumber:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model("bank", bankSchema)