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
  password: "root",
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
    "INSERT INTO user (`username`,`firstname`,`middlename`,`lastname`, `email`, `dateofbirth`, `Age`,`gender`, `mobilenum`, `role`, `password`, `status` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

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
      req.body.status,
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
  res.send({ loggedIn: true, user: req.session.user }) //temp test using isAuth
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
            return res.send({ loggedIn: true, role: req.session.user[0].role }) // Successful login NOTE: temp test for auth also add here where if the account is active or disabled.
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
//end of login

app.get("/airports", (req, res) => {
  const sql =
    "SELECT airportID, municipality, iata_code, airportName, keywords FROM airport"

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err)
      res.status(500).json({ error: "Internal server error" })
      return
    }
    // Send the result as a JSON response
    return res.json(result)
  })
})

app.get("/users", (req, res) => {
  const sql =
    "SELECT userID, username, firstname, middlename, lastname, email, gender, dateofbirth, Age, mobilenum, role, status  FROM user"

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err)
      res.status(500).json({ error: "Internal server error" })
      return
    }
    return res.json(result)
  })
})

app.post("/updateUsers", (req, res) => { 
const sql = "UPDATE user SET `username` = ?, `firstname` = ?,`middlename` = ?,`lastname` = ?,`email` = ?,`gender` = ?,`mobilenum` = ?,`role` = ?,`status` = ? WHERE userID = ?;"  

const values = [
  req.body.username,
  req.body.firstname,
  req.body.middlename,
  req.body.lastname,
  req.body.email,
  req.body.gender, //sex
  req.body.mobilenumber,
  req.body.role,
  req.body.status,
  req.body.userID
]

db.query(sql, values, (err, result) => {
  if (err) {
    console.error("Error occurred while updating user:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
  return res
    .status(201)
    .json({ message: "User created successfully", userId: result.insertId }) // make modal that shows user created successfully
})
  
})

app.get("/promos", (req, res) => {
  const sql =
    "SELECT * FROM promos"

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err)
      res.status(500).json({ error: "Internal server error" })
      return
    }
    return res.json(result)
  })
})

app.post("/addPromos", (req, res) => {
  const sql = "INSERT INTO promos (`PromoCode`,`description`,`statusID`) VALUES (?,?,?)"

  const values = [
    req.body.PromoCode,
    req.body.description,
    req.body.statusID
  ]

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error occurred while updating user:", err)
      return res.status(500).json({ error: "Internal server error" })
    }
    return res
      .status(201)
      .json({ message: "User created successfully", userId: result.insertId }) // make modal that shows user created successfully
  })

})
app.post('/updatePromos', (req, res) => { 
  const sql = "UPDATE promos SET `PromoCode` = ?, `description` = ?, `statusID` = ? WHERE PromoID = ?"

  const values = [
    req.body.PromoCode,
    req.body.description,
    req.body.statusID,
    req.body.PromoID,
  ]


  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error occurred while updating user:", err)
      return res.status(500).json({ error: "Internal server error" })
    }
    return res
      .status(201)
      .json({ message: "User created successfully", userId: result.insertId }) // make modal that shows user created successfully
  })
})

app.get('/getFlights', (req, res) => { 
  const sql = "SELECT f.FlightID, f.aircraftID, a.Model, f.availableSeats, d.airportID AS departureID, d.airportName AS departureName,dst.airportID AS destinationID, dst.airportName AS destinationName, s.status FROM flight f JOIN aircraft a ON f.aircraftID = a.aircraftID JOIN status s ON f.status = s.statusID JOIN airport d ON f.departureID = d.airportID JOIN airport dst ON f.destinationID = dst.airportID;"

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
});

app.get('/getFlightTime', (req, res) => { 
  const sql = "SELECT FlightID, departDateTime, arrivalDateTime, returnDateTime from flight"

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err)
      res.status(500).json({ error: "Internal server error" })
      return
    }
    return res.json(result)
  })

})
app.get('/flightstatus', (req, res) => { 
const sql = "SELECT * FROM status WHERE statusID BETWEEN 3 AND 8;"

db.query(sql, (err, result) => {
  if (err) {
    console.log("Error executing SQL query:", err)
    res.status(500).json({ error: "Internal server error" })
    return
  }
  return res.json(result)
})
  
})
app.get('/aircrafts', (req, res) => { 
  const sql = "SELECT * FROM aircraft"

db.query(sql, (err, result) => {
  if (err) {
    console.log("Error executing SQL query:", err)
    res.status(500).json({ error: "Internal server error" })
    return
  }
  return res.json(result)
})
})
app.post('/addflight', (req, res) => { 
  const sql = "INSERT INTO flight (`Departure`,`Destination`, `departDateTime`,`returnDateTime`,`arrivalDateTime`,`aircraftID`,`availableSeats`,`status`,`departureterminal`,`departuregate`,`arrivalTerminal`,`arrivalGate`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"

  const values = [
    req.body.from,
    req.body.to,
    req.body.departureDateTime,
    req.body.returnDateTime,
    req.body.arrivalDateTime,
    req.body.aircraft,
    req.body.seat,
    req.body.status,
    req.body.depterminal,
    req.body.depgate,
    req.body.arrterminal,
    req.body.arrgate
  ]

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error occurred while creating flight:", err)
      return res.status(500).json({ error: "Internal server error" })
    }
    return res
      .status(201)
      .json({ message: "flight created successfully", userId: result.insertId }) // make modal that shows user created successfully
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
