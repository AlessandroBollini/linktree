const express=require('express');
const app=express();
const port=process.env.PORT || 8080;

app.get('/',(_req,res)=>{
    res.sendFile(__dirname+'/homePage.html');
});
app.get('/piedi',(_req,res)=>{
    res.sendFile(__dirname+'/piedi.html');
});
app.get('/badBunny',(_req,res)=>{
    res.sendFile(__dirname+'/badBunny.html');  
})
app.get('/harem',(_req,res)=>{
    res.sendFile(__dirname+'/harem.html');
})

app.listen(port,()=>{
    console.log("App is running.html");
})