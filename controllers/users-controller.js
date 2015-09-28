var express = require('express');
var router = express.Router();

// var moongoose = require('mongoose');
// moongoose.connect('mongodb://localhost/ecommerce');
var User = require('../models/user')

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//INDEX
router.get("/users", function(req, res){
  User.find({}, function (err, users) {

    res.render('users/index', { users: users });
  });
})

//CREATE
router.post("/users", function(req, res){
  User.create(req.body.user, function (err, user) {
    if(err){
      res.send("something wrong happened"+ err)
    }else{
      res.redirect('/users');
    }
  });
})

//UPDATE
router.get("/users/:id/update", function(req, res){ 
  User.findByIdAndUpdate(req.params.id, function(err, user){
    res.redirect('/users');
  })
});

//DELETE
router.delete('/users/:id', function(req, res) {
  console.log('in delete');
  User.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/users');
  })
})

module.exports = router;