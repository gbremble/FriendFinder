// ### Load Data ###
var friendsData = require('./../data/friends');

// ### Routing ###
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        // declare variables
        var surveyData = req.body;
        var scoreDelta = 0;

        // initially you have no friends, but we'll fix that
        var currentFriendMatch = {
            name: "",
            photo: "",
            answerDelta: 100
        };

        // loop through friends array
        for (var i = 0; i < friends.length; i++) {

            // check the scores
            for (var j = 0; j < friends[i].scores.length; j++) {

                // calculate ∆ between scores; this is the "proprietary magic"
                scoreDelta = scoreDelta + Math.abs(parseInt(friends[i].scores[j]) - parseInt(surveyData.scores[j]));

                console.log(scoreDelta);

                // add the potential best match to the current friend match var
                if (scoreDelta <= currentFriendMatch.answerDelta) {
                    currentFriendMatch.name = friends[i].name;
                    currentFriendMatch.photo = friends[i].photo;
                    currentFriendMatch.answerDelta = scoreDelta;
                }
            }
            scoreDelta = 0;
        }
        console.log(currentFriendMatch.name);

        // add a new object to the friends array
        friends.push(surveyData);

        // show your friend on the page
        res.json(currentFriendMatch);
    });

}