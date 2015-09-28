var mongoose = require('mongoose')

var Order = mongoose.model('Order')

var userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: { type: Date, default: Date.now }
})

var User = mongoose.model('User'), ecommerceSchema)

module.exports = User