// we will create authentication middleware using a express.


const express = require("express")
const app = express();
const port =3000;

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "om" || password != "pass"){
        res.status(400).json({
            msg:"user not found"
        })
    }
    else{
        next();
    }
}

app.get("/home",userMiddleware,function(req,res){
    res.send("your heart is healthy")
})

app.listen(port,function(){
    `Sever is live on port ${port}`
})

