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

// Temporary storage for form data
let formData = {
  tripType: "",
  selectedFromAirport: "",
  selectedToAirport: "",
  departureDate: "",
  returnDate: "",
  children: 0,
  adults: 0,
  seniors: 0,
}

// API endpoint for searching flights
app.post("/searchflight", (req, res) => {
  const {
    tripType,
    selectedFromAirport,
    selectedToAirport,
    departureDate,
    returnDate,
    children,
    adults,
    seniors,
  } = req.body

  // Store all form data temporarily
  formData = {
    tripType,
    selectedFromAirport,
    selectedToAirport,
    departureDate,
    returnDate,
    children: parseInt(children),
    adults: parseInt(adults),
    seniors: parseInt(seniors),
  }

  res.send(formData)
  
})

// API endpoint to clear passengers data
app.post("/clearpassengers", (req, res) => {
  passengersData = {
    children: 0,
    adults: 0,
    seniors: 0,
  }
  res.json({ message: "Passengers data cleared" })
})


app.get('/getFlights', (req, res) => { 
  const sql = "SELECT departDateTime, arrivalDateTime, returnDateTime, f.FlightID, f.aircraftID, a.Model, f.availableSeats, d.airportID AS departureID, d.airportName AS departureName,dst.airportID AS destinationID, dst.airportName AS destinationName, s.status, s.statusID FROM flight f JOIN aircraft a ON f.aircraftID = a.aircraftID JOIN status s ON f.status = s.statusID JOIN airport d ON f.departureID = d.airportID JOIN airport dst ON f.destinationID = dst.airportID;"

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
});



// listen for requests
app.listen(5000, () => {
  console.log("server listening on port 5000")
  db.connect(function (err) {
    if (err) throw err
    console.log("database connected")
  })
})
