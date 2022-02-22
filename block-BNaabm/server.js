var express = require(`express`);

var app= express();

app.use('/',(req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
app.get('/',(req,res)=>{
    res.send(`Found request`)
})
app.listen(4000,()=>{
    console.log(`Listening on port 3k`);
})