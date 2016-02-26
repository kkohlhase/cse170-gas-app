var data = require("../data.json");

exports.updatePref = function(req, res) {
    console.log("hi");
    data["preferences"][0] = {
        "pref" : req.query.pref,
        "odometer" : req.query.odometer,
        "expectedmpg" : req.query.expectedmpg,
        "oil" : req.query.oil
    };
    console.log(data["preferences"][0]);
    res.render('preferences', data);
};
