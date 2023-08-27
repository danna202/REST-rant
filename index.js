// Require the dotenv module.
require('dotenv').config()  
// Require needed modules.
const express = require('express')
// Initialize the app object.
const app = express()
// Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

// Create a homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client
    // (your web browser most likely!)
    res.render('home')
})

// 404 route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>')
})

// Listen for connections.
    app.listen(process.env.PORT, function () {   
    console.log('I am awake!')
})


