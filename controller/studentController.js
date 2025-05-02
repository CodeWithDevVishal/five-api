const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Student = require("../model/student")

exports.getStudent = async (req,res) => {
    try {
        const data = await Student.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postStudent = async (req,res) => {
    try {
        const studentExist = await Student.findOne({name :req.body.name})
        if(studentExist) return res.status(500).json({errors:true,message:"Student alredy exist"})
        const data = await Student.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putStudent = async (req,res) => {
    try {
        const studentExist = await Student.findOne({_id:req.params.id})
        if(!studentExist) return res.status(500).json({errors:true,message:"Student not found "})
        const data = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteStudent = async (req,res) => {
    try {
        const data = await Student.findByIdAndDelete(req.params.id)
        if(!data) return res.status(500).json({errors:true,message:"Student not found exist"})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
