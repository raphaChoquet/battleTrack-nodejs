var http = require('http');
var url  = require('url');
var fs   = require('fs');

function start(sockets) {
	var port = process.env.PORT || 8080;
	var server = http.createServer(function (req, res) {
    	res.writeHeader(200, {"Content-Type": contentType});  
    	res.end();
	}).listen(port);
	
	sockets(server);
	console.log('Server starting on port : ' + port);
}


exports.start = start;