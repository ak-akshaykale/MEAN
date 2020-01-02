http = require("http")
url = require("url")
mysql = require("mysql")
http.createServer(function(req,res){

	q = url.parse(req.url,true)
	console.log(q.pathname)
	console.log(q.search)
	console.log(q.query)
	res.writeHead(200,{"content-type":"text/html"})
	uparam=url.parse(req.url,true).query;
	name=uparam.name
	city=uparam.city
	if(q.pathname="/info.html")
	{
	res.write("<h1>Hello "+name)//+reqip.getClientIp(req)
	res.write("!</h1><h2> & you are from "+city+"<h2>");
	}
	else if(q.pathname="/save.html")
	{
		
		console.log("save file requested")
		con=mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "ak"
		});
		con.connect(function(err){
		sql = "insert into info values('"+name+"','"+city+"')"
		con.query(sql,function(err,res){
			if(err)
			{
				//res.write("<h2>Problem with  Database? Information not Stored</h2>");
			}
			else
			{
				//res.write("<h2>Information Sucessfully Stored On server</h2>")
			}
		});
		});
	}
	else
	{
		res.write("404 Error!")
	}
	res.end();
}).listen(8082);
console.log("Waiting for client request...")