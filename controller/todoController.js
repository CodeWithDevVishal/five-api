const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Todo = require("../model/todo")

exports.getTodo = async (req,res) => {
    try {
        const data = await Todo.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postTodo = async (req,res) => {
    try {
        const todoExist = await Todo.findOne({todo:req.body.todo})
        if(todoExist) return res.status(500).json({errors:true,message:"todo  alredy exist"})
        const data = await Todo.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putTodo = async (req,res) => {
    try {
        const todoExist = await Todo.findOne({_id:req.params.id})
        if(!todoExist) return res.status(500).json({errors:true,message:"Somthin went wrong"})
        const data = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteTodo = async (req,res) => {
    try {
        const data = await Todo.findByIdAndDelete(req.params.id)
        if(!data) return res.status(500).json({errors:true,message:"Student not found exist"})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
