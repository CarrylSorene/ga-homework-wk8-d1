var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

var app = express();
var router = express.Router()

mongoose.connect('mongodb://localhost/mongoose-ecommerce')

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 9000)

//correct order?
var Product = require('/models/product')
var Order = require('./models/order')
var User = require('.models/user')

var stressball = new Product({
  name: 'Squeezy Ball'
  price: 4.50,
  description: 'Squishy'
})

stressball.orders.push({
  //?
})

stressball.save(function(err, product) {
  if (err) console.log(err)
    console.log('Squeezy Ball saved!')
})

Product
.findOne(product.id)
.populate()//?
.exec(function (err, product) {
  if (err) console.log(err)
    console.log(product)
  })
}