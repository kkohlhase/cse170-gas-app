var data = require("../data.json");

exports.addFillup = function(req, res) { 
	console.log("hi");
	console.log(req.query.date);
    var newFillup = {
    	"date" : req.query.date,
    	"name" : req.query.name,
    	"address" : req.query.address,
    	"price" : req.query.price,
    	"amount" : req.query.amount,
    	"note" : req.query.note,
        "miles" : req.query.miles
    };
    data["fillups"].push(newFillup);
    console.log(newFillup);
    res.render('addFillup', data);
};
