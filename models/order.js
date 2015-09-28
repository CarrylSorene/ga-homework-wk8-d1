var mongoose = require('mongoose')

var Product = mongoose.model('Product')
var User = mongoose.model('User')

var orderSchema = new mongoose.Schema({
  price: String,
  createdAt: { type: Date, default: Date.now },
  address: {}
  street: String,
  postcode: String,
  town: String,
  country: String,
  users: [User.schema]
})

var Order = mongoose.model('Order'), orderSchema)

module.exports = Order