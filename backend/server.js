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

app.get("/getseats", (req, res) => { 
  const sql = "SELECT * FROM seat"
  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
})
app.post("/setpassenger", (req, res) => {
  const passengerData = req.body;
  const sql =
    "INSERT INTO passenger (`firstName`,`lastName`,`birthday`,`nationality`) VALUES ?"

    // Extracting values from passengerData for insertion into the database
    const values = passengerData.map(passenger => [
      passenger.Fname,
      passenger.Lname,
      passenger.bday,
      passenger.nationality
    ]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("Error occurred while inserting user:", err)
      return res.status(500).json({ error: "Internal server error" })
    }
    return res
      .status(201)
      .json({ message: "passenger created successfully" }) // make modal that shows user created successfully
  })
  
});
app.post("/getpassenger", (req, res) => { 
  const passengerData = req.body;

  // Assuming passengerData is an array containing objects with 'Fname' and 'Lname' properties
  const sql = "SELECT * FROM passenger WHERE (firstName, lastName) IN (?)";
  
  // Extracting first name and last name values from passengerData array
  const values = passengerData.map(passenger => [passenger.Fname, passenger.Lname]);

  // Execute the SQL query
  db.query(sql, [values], (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
});

app.post("/bookFlight", (req, res) => {
  // Extract data from the request body
  const { combinedData, fetchedPassengers } = req.body;

  // Prepare SQL query to insert booking data
  const sql =
    "INSERT INTO booking (`passengerID`, `flightID`, `statusID`, `ClassType`, `SeatID`, `Bookingdate`, `PromoID`, `paymentID`) VALUES ?";

  // Prepare values array for the SQL query
  const values = [];

  // Iterate over each fetched passenger and add their details to the values array
  fetchedPassengers.forEach(passenger => {
    // Retrieve the SeatID for the current passengerID from combinedData
    const seatID = combinedData[passenger.passengerID];

    // Push the booking details for the current passenger into the values array
    values.push([
      passenger.passengerID,
      combinedData.FlightID,
      9, // Assuming statusID is 9; adjust as per your schema
      'economy',
      seatID, // Insert the retrieved SeatID for this passenger
      combinedData.bookdate,
      null,
      null
    ]);
  });

  // Execute the SQL query
  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("Error occurred while inserting booking:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.status(201).json({ message: "Booking created successfully" });
  });
});

app.post('/getpassBooking', (req, res) => { 
  const { passengerIDs } = req.body;

  if (!passengerIDs || !Array.isArray(passengerIDs) || passengerIDs.length === 0) {
    return res.status(400).json({ error: "Passenger IDs array is required" });
  }

  const sql = `
  SELECT 
    booking.BookingID, 
    booking.passengerID, 
    booking.flightID, 
    booking.statusID, 
    booking.ClassType, 
    booking.SeatID, 
    booking.Bookingdate, 
    booking.promoID, 
    booking.paymentID,  
    flight.departDateTime, 
    flight.arrivalDateTime,
    status.status,    
    seat.seatno      
  FROM booking
  JOIN flight ON booking.flightID = flight.flightID
  JOIN status ON booking.statusID = status.statusID
  JOIN seat ON booking.SeatID = seat.SeatID
  WHERE booking.passengerID IN (?)
`;

  db.query(sql, [passengerIDs], (err, result) => {
    if (err) {
      console.log("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(result);
  });
})


app.post('/postPayment', (req, res) => { 

  const {data} = req.body

  const sql = "INSERT INTO payment (`statusID`, `discountID`, `Amount`, `mop`, `paytime`, `paydate`) VALUES ?"

  values = [
   [ data.statusID,
    null,
    data.farePerPassenger,
    data.total,
    'gcash',
    data.currentTime,
    data.currentDate]
  ]

 // Execute the SQL query
 db.query(sql, [values], (err, result) => {
  if (err) {
    console.error("Error occurred while inserting booking:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
  return res.status(201).json({ message: "Booking created successfully" });
});

})










// listen for requests
app.listen(5000, () => {
  console.log("server listening on port 5000")
  db.connect(function (err) {
    if (err) throw err
    console.log("database connected")
  })
})
