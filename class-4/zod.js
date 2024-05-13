const express = require("express");
const zod= require("zod");
const app =  express();
const port = 5500;


/* how can we write a zod schema for a 
email => email@ .com
password => atleast 8 digits
country => "IN","US" */

const schemas = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})


const schema = zod.array(zod.number()); 

app.use(express.json());


app.post("/",function(req,res){
    const Kidneys = req.body.Kidneys;
    const response = schema.safeParse(Kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }else{res.send(
        response
    )}
    
})

app.listen(port,()=>
    console.log(`server is live on port ${port}`)
)