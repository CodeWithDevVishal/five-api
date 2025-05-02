const route = require("express").Router()
const {getStudent,postStudent,putStudent,deleteStudent} = require("../controller/studentController")

route.get("/",getStudent)
route.post("/",postStudent)
route.put("/:id",putStudent)
route.delete("/:id",deleteStudent)

module.exports = route