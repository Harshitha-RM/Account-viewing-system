const express = require("express")
const router = express.Router()
const loginControllers = require("../Controllers/login")
const tablesControllers = require("../Controllers/tables")


router.use("/login", loginControllers)
router.use("/tables", tablesControllers)



module.exports = router;