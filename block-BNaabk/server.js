var express = require(`express`);

var app= express();

app.get('/',(req,res)=>{
    res.send(`Found request`)
})
app.listen(3000,()=>{
    console.log(`Listening on port 3k`);
})