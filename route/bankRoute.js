const route = require("express").Router()
const {getBank,postBank,putBank,deleteBank} = require("../controller/bankController")

route.get("/",getBank)
route.post("/",postBank)
route.put("/:id",putBank)
route.delete("/:id",deleteBank)

module.exports = route