# Friend_Finder

### Overview
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

The Directories must be organized like:

FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
    
 ### Instructions
 
1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
Your htmlRoutes.js file should include two routes:

2. A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. 

* Your apiRoutes.js file should contain two routes:

* A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

3. A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

4. You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.


Determine the user's most compatible friend using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


Example: 

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: **2 + 1 + 2 = 5**

* Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and     3-5 as 2, and so on. 

* The closest match will be the user with the least amount of difference.

1. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.


![Image of product Table](https://github.com/tdsteph1/Friend_Finder/blob/master/images/Img1.png)
Home Screen

![Image of product Table](https://github.com/tdsteph1/Friend_Finder/blob/master/images/Img2.png)
Bob enters his name, image url, and answers survey questions

![Image of product Table](https://github.com/tdsteph1/Friend_Finder/blob/master/images/Img3.png)
Bob finds best matching friend named "Hungry" based on formulate describe above.

![Image of product Table](https://github.com/tdsteph1/Friend_Finder/blob/master/images/Img4.png)
Tom enters his name, image url, and answers survey questions.

![Image of product Table](https://github.com/tdsteph1/Friend_Finder/blob/master/images/Img5.png)
Tom is matched with Bob.
