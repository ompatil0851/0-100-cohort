const express = require("express")
const zod = require("zod")
const app = express();
const port =3000;

function userMiddleware(req, res, next){  //middleware for user and password auth
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "om" || password !=  "pass"){
        res.status(400).json({msg: " user not found"})
    }
    else{
        next();
    }
};

function KidneyIdMiddleware(req,res, next){ // middleware for kidney input
    const KidneyID = req.query.KidneyID;

    if(KidneyID != 1 && KidneyID != 2){
        res.status(400).json({msg:"wrong input"})
    }

    else{
        next();
    }
}


app.get("/health-checkup",userMiddleware, KidneyIdMiddleware, function(req,res){
    res.send("your heart is healthy")
}) 
//use of middleware in the process


app.post("/health-checkup",function(req,res){
    const Kidneys = req.body.Kidneys;
    const Kidneylength =  Kidneys.length;
    res.send(`you have ${Kidneylength} kidneys`);
})// requesting body 


app.use(function(err,req,res,next){
    res.json({
      msg: "something is wrong with the server"
    })
  }) //Global catch  , error based middleware
     

app.listen(port,()=>
console.log(`listening on ${port}`))