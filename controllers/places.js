const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

// Index
router.get('/', (req, res) => {
  db.Place.find()
  .then(places => {
      res.render('places/index', { places })
  })
  .catch(err => {
      console.log('err', err)
      res.send('Error')
  })
}
)

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    res.render('places/index', { places })
})
// Show
// router.get('/:id', (req, res) => {
//     res.render('places/show')
// })
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   // else {
//   //   res.render('places/show', { place: places[id] })
//   // }
//   else {
//     res.rem('places/edit', { place: places[id] })
//   }
// })


router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})




  router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
  }
  else {
      res.render('error404')
  }
  }
  )
})


router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
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