// npm init -y
// np install express

const express = require('express');

//server creation

const app=express();
let port='8080';
app.listen(port,function(){
    console.log(`server is starting ${port}`);

});
//types of request => get post put delete
app.get ('/',(req,res)=>{  // call back function

    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('<h1>hello hi </h1>');
})
let obj={
    "name":'Shivam',
}
app.get ('/user',(req,res)=>{
    console.log('users');
    res.json(obj);
})
app.get ('/home',(req,res)=>{
    // console.log('users');
    res.sendFile('./views/index.html',{root:__dirname});
})