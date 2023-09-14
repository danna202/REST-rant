// Require the dotenv module.
require('dotenv').config()  
// Require needed modules.
const router = require('express').Router()
const db = require('../models')

// require("method-override")
// const methodOverride = require('method-override')
// Initialize the app object.
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')

// Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(methodOverride('_method'))

// Create a homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client
    // (your web browser most likely!)
    res.render('home')
})

// Route to handle POST requests to "/places"
app.post('/places', (req, res) => {
    // Extract data from the request body
    const { name, pic, city, state, cuisines } = req.body;

    // Process the data (e.g., save to a database)
    // ...

    // Respond with a success message
    res.send('Place added successfully');
});

// 404 route
// app.get('*', (req, res) => {
//     res.status(404).send('<h1>not found</h1>')
// })
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for connections.
    app.listen(process.env.PORT, function () {   
    console.log('I am awake!')
})


