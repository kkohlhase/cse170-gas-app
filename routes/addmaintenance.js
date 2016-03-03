/**
 * Created by gabe on 3/3/16.
 */
var maintenance = require('../public/data.json');

exports.addMaintenance = function(req, res) {
    var newMaintenance = {
        "name" : req.body.name,
        "date" : req.body.date,
        "description" : req.body.description
    };
    maintenance["maintenance"].push(newMaintenance);
    res.render('addmaintenance', maintenance);
};