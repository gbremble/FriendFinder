// ### Load Data ###
var friendsData = require('./../data/friends');

// ### Routing ###
module.exports = function (app) {

    app.get('/api/friends', function (request, response) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (request, response) {
        // declare variables
        var surveyData = request.body;
        var scoreDelta = 0;

        // initially you have no friends, but we'll fix that
        var currentFriendMatch = {
            name: "",
            photo: "",
            answerDelta: 100
        };

        // loop through friends array
        for (var i = 0; i < friendsData.length; i++) {

            // check the scores
            for (var j = 0; j < friendsData[i].scores.length; j++) {

                // calculate ∆ between scores; this is the "proprietary magic"
                scoreDelta = scoreDelta + Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(surveyData.scores[j]));

                console.log(scoreDelta);

                // add the potential best match to the current friend match var
                if (scoreDelta <= currentFriendMatch.answerDelta) {
                    currentFriendMatch.name = friendsData[i].name;
                    currentFriendMatch.photo = friendsData[i].photo;
                    currentFriendMatch.answerDelta = scoreDelta;
                }
            }
            scoreDelta = 0;
        }
        console.log(currentFriendMatch.name);

        // add a new object to the friends array
        friendsData.push(surveyData);

        // show your friend on the page
        res.json(currentFriendMatch);
    });

}