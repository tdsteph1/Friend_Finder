//Dependencies
var path = require("path");

module.exports = function(app)
{

	//HTML GET Requests
	//Below code handles when users "visit" a page

	//Home Page
	app.get("/", function(req, res)
	{
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});



	//Survey Page
	app.get("/survey", function(req, res)
	{
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

};