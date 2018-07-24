/**
 * ## Load Data: load the app data form the Friends file
 */
var friendsData = require('./../data/friends');

/**
 * ## Routing
 */
module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        friendsData.push(req.body);

        // TODO: do I need a response here?
    });

}