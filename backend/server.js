const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


// express app
const app = express()


app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'triptoheaven'
})

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("connected")
// })


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO user (`username`,`firstname`,`middlename`,`lastname`, `email`, `dateofbirth`, `Age`,`gender`, `mobilenum`, `role`, `password` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.username,
        req.body.firstname,
        req.body.middlename,
        req.body.lastname,
        req.body.email,
        req.body.dateofbirth,
        req.body.age,
        req.body.flexRadioDefault, //sex
        req.body.mobilenumber,
        req.body.role,
        req.body.password,
    ]

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error occurred while inserting user:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(201).json({ message: "User created successfully", userId: result.insertId });
    })


})






// listen for requests
app.listen(5000, () => {
    console.log('server listening on port 5000')

})