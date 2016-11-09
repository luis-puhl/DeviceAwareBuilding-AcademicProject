// embed an img element in an HTML page, point it at this.

var http = require("http"), crypto = require("crypto");

http.createServer(function(request, response) {
	let nowString = String(Date.now());
	console.log("Got request @ " + nowString);
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.write( nowString );
	response.end();
}).listen(80);

console.log("Server running at http://0.0.0.0:80/");
