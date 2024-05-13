const express = require("express");
const app = express();
const port = 5500;

app.get("/health-checkup", function(req,res){
    // do health check here
    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;

    if(username != "om" || password != "pass"){
        res.status(400).json({msg: " user does not exist"})
        return
    }

    if(KidneyId != 1 && KidneyId != 2){
        res.status(400).json({msg:"wrong input"})
        return
    }
    res.json({
        msg:" your kidney is fine"
    })

});

app.listen(port,()=>
console.log(`server is live at ${port}`))