const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "html";

mongoose.connect(
    "mongodb+srv://admin:12345@cluster0.zvu9olr.mongodb.net/practice"
);

const User = mongoose.model("User",{
    name: String,
    username : String,
    password: String,
});

const app = express();
app.use(express.json());

function userExists(username,password){
    //should check in the database
}

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)){
       return resizeBy.status(403).json({
         msg: "User does not exist in our in memory db",
       });
    }

})


//it is easy do to your self

