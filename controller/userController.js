const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const user = require("../model/user")

exports.getUser = async (req,res) => {
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postUser = async (req,res) => {
    try {
        const userExist = await User.findOne({email:req.body.email})
        if(userExist) return res.status(500).json({errors:true,message:"user alredy exist"})
        req.body.password = bcrypt.hash(req.body.password,10)
        const data = await User.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putUser = async (req,res) => {
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (!userExist) return res.status(500).json({errors:true,message:"Invalied user emali or password"})
        const verifyPassword = bcrypt.compare(req.body.password,userExist.password)
        if (!verifyPassword) return res.status(500).JSON({errors:true,message:"Invalied user emali or password"})
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const userExist = await User.findOne({email:req.body.email})
        if(!userExist) return res.status(500).json({errors:true,message:"Invalied user emali or password"})
        const verifyPassword = bcrypt.compare(req.body.password,userExist.password)
        if(!verifyPassword) return res.status(500).json({errors:true,message:"Invalied user emali or password"})
        const data = await User.findByIdAndDelete(req.params.id)
        return res.status(500).json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.login = async (req, res) => {
    try {
        const userExist = await Users.findOne({ email: req.body.email })
        if (!userExist) return res.status(500).json({ errors: true, message: "Invalied email or password" })
        const verifyPassword = bcrypt.compare(req.body.password, userExist.password)
        if (!verifyPassword) return res.status(500).json({ errors: true, message: "Invalied email or password" })
        const token = jwt.sign({ id: userExist._id }, process.env.SEC)
        return res.json({ errors: false, data: { token: token, user: userExist } }) 
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}