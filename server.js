//import express module
var express=require('express')


var app =express()
var port=9000;

app.get('/about',(req,res)=>{
    res.send('about page');
})

app.get('/users/:name',(res,req)=>{
    var userName= req.params.name;
    res.send('Hello,${username}!');
})



app.listen(port,()=>{ 
    console.log('server running')
})