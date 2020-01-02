exp = require("express");
url= require("url")
app=exp();
app.listen(2222);
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
})
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/login.html");
})
app.get("/verify",function(req,res){
    para = url.parse(req.url,true).query;
    uname=para.un;
    upass=para.up;
    str="*";
    var strr="";
    for(i=0;i<upass.length;i++)
    {
        strr=strr+str;
    }

    res.send("Your name is "+uname+"\n& password is <u>"+strr+"</u> encoded ");
});
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
})
console.log("Express server started");