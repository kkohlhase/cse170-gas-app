
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var exhbs = require('express3-handlebars')
var hbs = exhbs.create({
	helpers: {
		calculatePPG : function(price, amount) {return Math.round((price / amount) * 100) / 100; },
		calculateMPG : function(miles, amount) {return Math.round((miles / amount) * 10) / 10; }
	}
});

var index = require('./routes/index');
var profile = require('./routes/profile');
var placeholder = require('./routes/placeholder');
var addfillup = require('./routes/addfillup');
var adddestination = require('./routes/adddestination');
var tipshelp = require('./routes/tipshelp');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/profile', profile.viewProfile);
app.get('/placeholder', placeholder.viewPlaceholder);
app.get('/addfillup', addfillup.addFillup);
app.get('/adddestination', adddestination.addDestination);
app.get('/tipshelp', tipshelp.viewTipsHelp);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
