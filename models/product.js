var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
  name: String,
  price: Float, //only turns blue italics with a small f
  description: String
})

var Product = mongoose.model('Product'), productSchema)

module.exports = Product