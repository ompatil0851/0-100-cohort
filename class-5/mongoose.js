const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); // To get the body as json
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:123456Om@cluster0.zvu9olr.mongodb.net/userappnew")// connecting to the database

const User = mongoose.model('users', { name: String, email: String,
    password: String
 });


 app.post("/signup",async function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email: username});
  if (existingUser){
    return res.status(400).send("Username already exists");
  }

  const user = new User(
    { name: name,
      email: username,
      password: password
    }
  );
  
  user.save();
res.json({
  msg: "User created succesfully"
})

})

app.listen(port,function(){
  console.log(`server is live on port ${port}`)
})




 