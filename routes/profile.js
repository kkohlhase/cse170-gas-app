var destinations = require('../dest.json');

exports.viewProfile = function(req, res) { 
    console.log(destinations);
  	
    res.render('profile', destinations);

};