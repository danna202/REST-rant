// Require the dotenv module.
require('dotenv').config()  


// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Home Page')
})



// Listen for connections.
// app.listen(3000, function () {
    app.listen(process.env.PORT, function () {   
    console.log('I am awake!')
})


