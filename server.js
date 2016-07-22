/**
 * Created by VenkateshS on 7/21/2016.
 */
var express=require('express');
var app=express();

var port=Number(process.env.PORT||9999);

app.get('/',function(req,res){
    res.send("Hello World");
});

app.get('/first',function(req,res){
    res.sendfile('index.html');
});


app.listen(port);
console.log("server is running on port number "+port);