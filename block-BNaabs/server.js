var express = require(`express`);
var cookieParser= require(`cookie-parser`);
var logger=require(`morgan`);

var app= express();

app.listen(3000,()=>{
    console.log(`Listening on port 3k`);
})