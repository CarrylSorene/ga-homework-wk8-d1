var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

var app = express();
var router = express.Router()

mongoose.connect('mongodb://localhost/mongoose-ecommerce')

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 9000)

//correct order?

var User = require('./models/user')
var Product = require('./models/product')
var Order = require('./models/order')

var stressball = new Product({
  name: 'Squeezy Ball',
  price: 4.50,
  description: 'Squishy'
})

var orderOne = new Order ({
  price: '4.50',
  createdAt: 28/09/2015,
  address: {
    street: '73 Springbok Lane',
    postcode: 'RU18 9KL',
    town: 'Springfield',
    country: 'UK',
  },
})

orderOne.save(function(err, order) {
  if (err) console.log(err)
    console.log('OrderOne saved!')
})

// orderOnestressball.push({
//   
// })

stressball.save(function(err, product) {
  if (err) console.log(err)
    console.log('Squeezy Ball saved!')
})

var userOne = new User({
  name: 'Amelia Earhart',
  gender: 'Female',
  dob: 05/06/1987
})

userOne.save(function(err, product) {
  if (err) console.log(err)
    console.log('Amelia Earhart saved!')
})

// Order
// .findOne(_order.id)
// .populate(product)//?
// .exec(function (err, order) {
//   if (err) console.log(err)
//     console.log(order)
//   })