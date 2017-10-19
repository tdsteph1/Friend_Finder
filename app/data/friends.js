//Data below will hold all of the friends. So here we have an array of objects. 
//each object(friend) is stored at a particular index. We will continue to push
//users into this object array as the user enters data.

var friendsArray = [

	{
		name: "Hungry",
		photo: "http://i.imgur.com/1VLKJrZ.gif",
		scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	}


];

//Note how we export the array. This makes it accessible to other files using requires
module.exports = friendsArray;