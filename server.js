/**
 * Created by VenkateshS on 7/21/2016.
 */
var express=require('express');
var app=express();


app.get('/',function(req,res){
    res.send("Hello World");
});

app.get('/first',function(req,res){
    res.sendfile('index.html');
});


app.listen('9999');
console.log("server is running on port number 9999");