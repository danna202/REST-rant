const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/:id', (req, res) => {
  res.render('places/show', { place: places[req.params.id] })
})




router.post('/', (req, res) => {
  console.log(req.body)


  res.redirect('/places')
})








// Get places
// router.get('/', (req, res) => {
//   let places = [{
//       name: 'Holy Moly',
//       city: 'Asheville',
//       state: 'NC',
//       cuisines: 'American, Burgers, Sandwiches',
//       pic: "/images/american.png"
//     }, {
//       name: 'Wang Fu',
//       city: 'Waynesville',
//       state: 'NC',
//       cuisines: 'Chinese',
//       pic: '/images/chinese.png'
//     }]
    
//   res.render('places/index', { places: places })
// })







module.exports = router