const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bcrypt = require("bcrypt")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const saltRounds = 10
// express app
const app = express()

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
)

app.use(express.json())
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "triptoheaven",
})

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    key: "userID",
    secret: "test",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
)

//This is for authentication when the dashboard and admin is completed.
const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next()
  } else {
    res.send({ loggedIn: false })
  }
}

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO user (`username`,`firstname`,`middlename`,`lastname`, `email`, `dateofbirth`, `Age`,`gender`, `mobilenum`, `role`, `password` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

  const password = req.body.password.toString()
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }

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
      hash,
    ]

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error occurred while inserting user:", err)
        return res.status(500).json({ error: "Internal server error" })
      }
      return res
        .status(201)
        .json({ message: "User created successfully", userId: result.insertId }) // make modal that shows user created successfully
    })
  })
})

app.get("/login", isAuth, (req, res) => {
  res.send({ loggedIn: true, user: req.session.user })
})

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ?"

  db.query(sql, [req.body.loginEmail], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Internal server error" }) // Handle database error
    }
    if (result.length > 0) {
      // Load hash from your password DB.
      bcrypt.compare(
        req.body.loginPass,
        result[0].password,
        (error, response) => {
          if (error) {
            return res.status(500).send({ message: "Internal server error" }) // Handle bcrypt error
          }

          if (response) {
            req.session.user = result // Set user session
            req.session.isAuth = true // Set session
            return res.send({ loggedIn: true }) // Successful login
          } else {
            return res.send({ message: "Incorrect Password" }) // Incorrect password
          }
        }
      )
    } else {
      return res.send({ message: "User does not exist" }) // No user with the provided email
    }
  })
})

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err
    res.send({ loggedIn: false })
  })
})

// listen for requests
app.listen(5000, () => {
  console.log("server listening on port 5000")
  db.connect(function (err) {
    if (err) throw err
    console.log("database connected")
  })
})
