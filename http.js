var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/json' });

	// var readable = fs.createReadStream(__dirname + '/readme.txt');
	// var readable = fs.createReadStream(__dirname + '/index.html', 'utf8');
	// readable.pipe(end);

	var myObj = {
		name: 'Romeo',
		age: 23
	};
	res.end(JSON.stringify(myObj));
}).listen(3000);
