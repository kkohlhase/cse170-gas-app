var destinations = require("../dest.json");

exports.addDestination = function(req, res) { 
	console.log("hi")
	
    var newDestination = {
    	"name" : req.query.name,
    	"address" : req.query.address
    	
    };
    destinations["destinations"].push(newDestination);
    console.log(newDestination);
    res.render('addDestination', destinations);
};