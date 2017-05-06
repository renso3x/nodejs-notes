var express = require('express');
var fs = require('fs');
var path = require('path');

var port = 3000;
var app = express();

var responseTime = require('response-time');
var image = path.join(__dirname, 'shock.jpg');

app.use(responseTime());

// uses non-stream to request a bit longer to of the response-time
app.get('/non-stream', function(req, res) {
	var file = fs.readFile(image, function(err, data) {
		res.end(data);
	});
});

app.get('/non-stream2', function(req, res) {
	var file = fs.readFileSync(image);
	res.end(file);
});

// uses stream to request faster than non-stream response time is fast
app.get('/stream', function(req, res) {
	var stream = fs.createReadStream(image);
	stream.pipe(res);
});

app.get('/stream2', function(req, res) {
	var stream = fs.createReadStream(image);

	stream.on('data', function(data) {
		res.write(data)
	})

	stream.on('end', function() {
		res.end();
	})
});

app.listen(port);
