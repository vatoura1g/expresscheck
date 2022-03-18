const express = require("express");
const app = express();
const path=require("path")
// if (((d.getHours >= 9) && (d.getHours <= 17))&&(d.getDay >=1)&&(d.getDay=<5)) {
//     app.get(express.static(path.join(__dirname, "public")));
const d = new Date();
const hrs=d.getHours();
const dd=d.getDay()
const reqFilter=(req,res,next)=>{
    if (( 0<dd&&dd<6)&&(hrs>=9&&hrs<=14)  ){
        res.send("<h1> Hello </h1>")
    }
    else {
       res.send("Arja3 ghodwa")
    }
    next()
}

app.use(reqFilter);

app.get(express.static(path.join(__dirname,"public")))
const PORT = process.env.PORT || 3000;


app.listen(PORT,err=>err?console.log(err):console.log(`server is running on ${PORT}`));