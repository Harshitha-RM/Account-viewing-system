const express = require("express")
const router = express.Router()
const db = require("../Config/db")


router.post("/login", (req, res) => {
    console.log("Inside Login", req.body);
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = '${email}' and password = '${password}'`

    db.query(sql, (err, result) => {
        if (err) throw err
        
        if(result.length > 0) res.status(200).send(result)
        else res.status(400).send(result)
    })
})

function getUserId(email, password) {
    return new Promise(resolve => {
        const sql = `SELECT * FROM users WHERE email = '${email}' and password = '${password}'`

        db.query(sql, (err, result) => {
            if (err) throw err

            if (result.length > 0) {
                console.log(result)
                resolve(result[0].idusers)
            }
        })
   })
}

module.exports = router