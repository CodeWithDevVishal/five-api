const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    birthDath:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    }
    
}, {timestamps:true})

module.exports = mongoose.model("student", studentSchema)