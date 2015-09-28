var express = require('express');
var router = express.Router();

// var moongoose = require('mongoose');
// moongoose.connect('mongodb://localhost/ecommerce');
var Product = require('../models/product')

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//INDEX
router.get("/products", function(req, res){
  Product.find({}, function (err, products) {

    res.render('products/index', { products: products });
  });
})

//CREATE
router.post("/products", function(req, res){
  Product.create(req.body.product, function (err, product) {
    if(err){
      res.send("something wrong happened"+ err)
    }else{
      res.redirect('/products');
    }

  });
})

//UPDATE
router.get("/products/:id/show", function(req, res){
  Product.findByIdAndUpdate(req.params.id, function(err, product){
    res.redirect('/products');
  })
});

//DELETE
router.delete('/products/:id', function(req, res) {
  console.log('in delete');
  Product.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/products');
  })
})

module.exports = router;