// we are going to write http in node with the help of express lib

const express = require('express');
const app = express();

// Define a route that responds with "Hello, World!"
app.get('/', function(req, res) {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, function(){
  console.log("serving is running at port 3000");
});

