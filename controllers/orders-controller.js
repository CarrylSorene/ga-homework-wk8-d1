var express = require('express');
var router = express.Router();

// var moongoose = require('mongoose');
// moongoose.connect('mongodb://localhost/ecommerce');
var Order = require('../models/order')

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//INDEX
router.get("/orders", function(req, res){
  Order.find({}, function (err, orders) {

    res.render('orders/index', { orders: orders });
  });
})

//CREATE
router.post("/orders", function(req, res){
  Order.create(req.body.order, function (err, order) {
    if(err){
      res.send("something wrong happened"+ err)
    }else{
      res.redirect('/orders');
    }
  });
})

//UPDATE

router.get("/orders/:id/update", function(req, res){
  Order.findByIdAndUpdate(req.params.id, function(err, order){
    res.redirect('/orders');
  })
});

//DELETE

router.delete('/orders/:id', function(req, res) {
  console.log('in delete');
  Order.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/orders');
  })
})

module.exports = router;