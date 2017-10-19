let path = require('path');

//Dependencies
//Series of nmp packages that we will use to give our server useful functionality

var express = require("express");
var bodyParser = require("body-parser");

//Express Configuration
//This sets up the basic properties for our express server

//Tells node that we are creating an "express" server
var app = express();

//Sets an initial port.
//process.env.PORT allows heroku to work
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
//NOTE!! set extended to true for deep parsing in order to view
//       nested objects like scores
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.use(express.static(path.join(__dirname, 'public')));


//Router
//The code below points our server to a series of "route" files.
//These routs give our server a "map" of how to respond when users visit or 
//request data from various urls
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

//Listener
//The below code effectively "starts" our server
app.listen(PORT, function()
{
	console.log("App listening on PORT: " + PORT);


});