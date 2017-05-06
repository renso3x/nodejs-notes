var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readme.txt');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

// readStream.on('data', function(chunk) {
// 	console.log('new chunk');
// 	console.log(chunk);
// 	writeStream.write(chunk);
// });

// readStream.pipe(writeStream)

// http.createServer(function (req, res) {
// 	console.log(req.url);
// 	res.writeHead('200', { 'Content-type': 'text/plain' })
// 	res.end('Hello World')
// }).listen(3000, '127.0.0.1');


// http.createServer((req, res) {
// 	req.setEncoding('utf8');
//
// 	req.on('data', function(chunk) {
// 		var transformChunk = transform(chunk); // a function
// 		req.write(transformChunk);
// 	});
//
// 	req.on('end', function() {
// 		res.end();
// 	});
// }).listen(3333);
