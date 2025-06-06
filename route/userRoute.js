const route = require("express").Router()
const {getUser,postUser,putUser,deleteUser} = require("../controller/userController")

route.get("/",getUser)
route.post("/",postUser)
route.put("/:id",putUser)
route.delete("/:id",deleteUser)

module.exports = route