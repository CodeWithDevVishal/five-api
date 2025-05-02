const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
require("dotenv/config")

const user = require("./route/userRoute")
const todo = require("./route/todoRoute")
const student = require("./route/studentRoute")
const product = require("./route/productRoute")
const bank = require("./route/bankRoute")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcom...")
})

app.use("/api/user",user)
app.use("/api/todo",todo)
app.use("/api/student",student)
app.use("/api/product",product)
app.use("/api/bank",bank)


app.listen(process.env.PORT,()=>{console.log("running ......  ....");})

async function db() {
    try {
        const isCon = await mongoose.connect(process.env.DB)
        console.log(isCon.default.STATES.connected);
        
    } catch (error) {
        console.log({Error: error.message});
    }
}db()