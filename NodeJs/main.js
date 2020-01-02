http = require("http");
url = require("url");
fs = require("fs");
mysql=require("mysql");

myserver=http.createServer(function(req,res){
    quer=url.parse(req.url);
    path=quer.pathname;
    if(path=="/")
    {
    //res.write("\nINDEX PAGE\nHello! ");
        fs.readFile("./index.html",function(err,data){
                res.write(data);
                res.end();
        });   
    }
    else if(path=="/login.html")
    {
    //res.write("\nINDEX PAGE\nHello! ");
        fs.readFile("./login.html",function(err,data){
               res.write(data);
                res.end();
        });   
    }
    else if(path=="/verify")
    {
    //res.write("\nINDEX PAGE\nHello! ");
        para=url.parse(req.url,true).query;
        uid=para.uid;
        pass=para.upass;
        con=mysql.createConnection({
            host:"localhost",
            username:"root",
            password:"",
            database:"ak"
        });
        sql="insert into valid values('"+uid+"','"+pass+"')";
        con.query(sql,function(err,result){
            if(err)
            console.log(err);
            else
            res.write(result);
        })      

        console.log("\nUID: "+uid+"\nPass: "+pass)
    }
    else
    {
        res.write("\n404 Page Not Found..")
        res.end();
    }
}).listen(8787);
console.log("Server Started...");