require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create express app
const app = express();
const port = process.env.PORT || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// mongoose.Promise = global.Promise;
// //Connecting to the database
// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database"); 
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require routes
require('./app/app.routes.js')(app);

//listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});