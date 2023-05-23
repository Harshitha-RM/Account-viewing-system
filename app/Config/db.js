const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    database: 'asgndb',
    password: 'Harshitha@21'
});

connection.connect((err) => {
    if (err) console.log(err);

    console.log("Connected to DB Asgn");
})

module.exports = connection