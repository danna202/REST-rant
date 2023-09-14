// module.exports = [{
//     name: 'Holy Moly',  
//     city: 'Asheville',
//     state: 'NC',
//     cuisines: 'American, Burgers, Sandwiches',
//     pic: "/images/american.png",
//     rating: 4.5,     
    
//     }, {

//     name: 'Wang Fu',
//     city: 'Waynesville',
//     state: 'NC',
//     cuisines: 'Chinese',
//     pic: '/images/chinese.png',
//     rating: 4.7,
       
// }]
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

