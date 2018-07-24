// ### Dependancies ###
var express = require('express');
var bodyParser = require('body-parser');

// ### Express Configuration ###
var app = express();

// use the port determined by the Heroku instance or the one specified below
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// ### Routing ###
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// ### Listener ###
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});