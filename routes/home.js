var express = require('express');
var path = require('path');
var router = express.Router();
var Users = require('../models/user');

router.get('/', function(req, res){
  if(req.isAuthenticated()){
    Users.find()
    .then(function(result){
      var usernames = result.map(function(user){
        return user.username;
      });
      res.send(usernames);
    })
    .catch(function(err){
      console.log('error:', err);
    });
  }
});

module.exports = router;
