const express = require('express')

// express app
const app = express()


//rout for api
app.get("/api", (req, res) => {
    res.json({
        "users": ["userOne", "userTwo", "userThree", "userFour"]
    }) //only for test
})

// listen for requests
app.listen(5000, () => {
    console.log('server listening on port 5000')

})