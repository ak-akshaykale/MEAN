httpserver = require('http');
httpserver.createServer(function(req,res){
	res.write("hello")
	console.log(req.url);
	res.write("\nThis isYour Request: "+req.url)
	if(req.url=="/html")
	{
		//res.writeHead(200,{'content-type':'text/html'});
		//res.write("<h1>Hello User</h1>");
		/*res.write("<br><span color:green>This is green text</span>")*/
		res.write("Color")
	}
	else
	{
		res.write("This is only plain text")
	}
	res.end()
}).listen(8088);
console.log("HTTP Server Is Ready.....");