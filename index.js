import bodyParser from "body-parser";
import express from "express"
const port=3000;
const app=express();
var x=23;
console.log("Wait does it just log upon running npx nodemon")
// Some random variables you know, just cause
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log("Server running successfully and recieving requests from port:"+port);
})
app.get("/",(req,res)=>{
    res.send("Sorry haven't made any ejs file to render");
    console.log("Alright they've asked for it now");
})