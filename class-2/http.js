// we are going to write http in node with the help of express lib

const express = require('express');
const app = express();

// Define a route that responds with "Hello, World!"
app.get('/homepage', function(req, res) {
  res.send("Welcome to the homepage");
});

app.get('/page1', function(req, res) {
  res.send("Welcome to the page1 ");
});

app.get('/page2', function(req, res) {
  res.send("Welcome to the page2");
});

app.get('/page3', function(req, res) {
  res.send("Welcome to the page3 ");
});

app.get('/page4', function(req, res) {
  res.send("Welcome to the page4");
});

//used to direct the user if not on the correct route
app.use(function(req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


// Start the server on port 3000
app.listen(3000, function(){
  console.log("serving is running at port 3000");
});

