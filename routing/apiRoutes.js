//Load Data
//We are linking our routes to data source.
//This data source holds an array of ...
var friendData = require("../app/data/friends.js");



//Routing
//called by require("./routing/apiRoutes.js")(app);
module.exports = function(app) 
{


	//API GET request
	//Code here handles when users visit a page. In each of the below cases
	//when a user visits a link (EX: localhost:3000/api/friends) they are shown
	// the JSON of the data in the friendData. NOTE that page will update with
	// new friend element as we push onto friendData/friendsArray[].
	app.get("/api/friends", function(req, res)
	{
		
		res.json(friendData);
	});


	//API POST request
	//Code handles when a user submits a form and thus submits data to the server.
	//In each of the below cases, when a user submits form data (a JSON object)
	//the JSON is pushed to the appropriate JavaScript array (friendsArray)
	app.post("/api/friends", function(req, res)
	{
		//(req.body) is the entire object ex newFriend{ name: photo: scores: }
		//(req) = newFriend which is the object geting passed in $.post("", newFriend)
		//this pushes the recently added newFriend object onto friends/friendsArray 
		//NOTE: that req.body comes from servey.html/newFriend{name: photo: scores } object
		//      which gets passed into $.post($.post("/api/friends", newFriend, function(data))
		friendData.push(req.body);
		res.json(true);

	});


};