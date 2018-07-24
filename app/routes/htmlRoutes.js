/**
 * ## Dpendancies
 */

var path = require('path');

/**
 * ## Routing
 */

module.exports = function (app) {

    // if you're on the */survey URL, you get the survey HTML page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // else, you get the home.html page
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}