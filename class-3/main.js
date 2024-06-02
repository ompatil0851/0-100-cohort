// creating a http server
// using express

const express = require("express");
const app = express();
const port = 3000;

function sum(n){
    let ans = 0;
    for(let i = 0;i <= n;i++){
        ans = ans + i;
    }
    return ans;  
}


app.get("/",function(req,res){
    const n = req.query.n
    const ans  =  sum(n);
    res.send("hii your answer us "+ ans);
}
)

app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
})