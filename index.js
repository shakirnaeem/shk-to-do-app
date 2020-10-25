const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
const port = process.env.port || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

//listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});