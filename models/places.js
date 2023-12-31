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
  pic: { type: String, default: 'http://placekitten.com/350/350' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
  
})



placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

