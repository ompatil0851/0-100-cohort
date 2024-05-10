const express = require("express");
const app = express();
const port = 5500;
app.use(express.json());


const user = [{
    name: "john",
    Kidneys:[{
        healthy: false
    }]
}];

app.get("/", function(req,res){
    const johnaKidneys = user[0].Kidneys;
    const numberofKidneys = johnaKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i = 0;i<numberofKidneys;i++){
        if(johnaKidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
    
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].Kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){

})


app.delete("/", function(req,res){

})

app.listen(port); 