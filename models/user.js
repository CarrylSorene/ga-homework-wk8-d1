var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: { type: Date, default: Date.now }
})

var User = mongoose.model('User', userSchema)

module.exports = User