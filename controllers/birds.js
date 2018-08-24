// Require express
var express = require('express');

// Declare a new router
var router = express.Router();


// Require the database
var db = require('../models');

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Define routes
router.get('/', loggedIn, function(req, res){
	db.bird.findAll({
		where: { userId: req.user.id }
	}).then(function(birds){ 
		res.render('birds/index', { birds: birds });
	}).catch(function(err){
		console.log(err);
		res.send('oops');
	});
  // res.render('birds/index');
});




module.exports = router;
