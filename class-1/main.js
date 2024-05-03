const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
/* Asynchronous function in Js */

console.log("hello 1") // hello 1 hello guys !!

let a =0;
for(let i =0 ; i<1000000;i++){
    a++;
}
console.log("hello 2")

/* Asynchronous functions
fs module 
setTimeout
 */


