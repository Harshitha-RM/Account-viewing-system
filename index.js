const express = require("express")
const app = express()
const cors = require("cors")

const db = require("./app/Config/db");
const router = require("./app/Config/routes")

app.use(cors())
app.use(express.json())
// app.use(bodyParser.json({ limit: '50mb' }))
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use("/", router)

app.listen(4000, () => {
    console.log("App is listening on port 4000");
})