var maintenance = require('../public/data.json');

exports.viewMaintenance = function(req, res) {
    console.log(maintenance);

    res.render('maintenance', maintenance);

};