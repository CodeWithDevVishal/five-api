const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Product = require("../model/product");

exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postProduct = async (req, res) => {
    try {
        const productExist = await Product.findOne({ title: req.body.title })
        if (productExist) return res.status(500).json({ errors: true, message: " product alredy exist already exists" })
        const data = await Product.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putProduct = async (req,res) => {
    try {
        const productExist = await Product.findOne({ _id: req.params.id })
        if (!productExist) return res.status(500).json({ errors: true, message: " product not found" })
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteProduct = async (req,res) => {
    try {
        const data = await Bank.findByIdAndDelete(req.params.id,{new:true})
        if (!data) return res.status(500).json({ errors: true, message: " product no found" })
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


