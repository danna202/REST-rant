const router = require('express').Router()

// places/new
router.get('/new', (req, res) => {  
  res.render('places/new')
})





// Get places
router.get('/', (req, res) => {
  let places = [{
      name: 'Holy Moly',
      city: 'Asheville',
      state: 'NC',
      cuisines: 'American, Burgers, Sandwiches',
      pic: "/images/american.png"
    }, {
      name: 'Wang Fu',
      city: 'Waynesville',
      state: 'NC',
      cuisines: 'Chinese',
      pic: '/images/chinese.png'
    }]
    
  res.render('places/index', { places: places })
})





module.exports = router