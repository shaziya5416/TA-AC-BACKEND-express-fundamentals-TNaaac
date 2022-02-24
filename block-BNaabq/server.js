var express = require(`express`);
var cookieParser= require(`cookie-parser`);
var logger=require(`morgan`);

var app= express();

app.use(cookieParser());

app.use(logger(`dev`));


app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(`/about`,(req,res,next)=>{
    console.log(req.cookies);
    res.cookie("username","shazia");
    next();
})


app.listen(3000,()=>{
    console.log(`Listening on port 3k`);
})