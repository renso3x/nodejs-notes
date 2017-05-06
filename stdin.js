process.stdin.resume();
process.stdin.setEncoding('utf8');

//listening on the terminal
process.stdin.on('data', function(data) {
	console.log('chuck: ' + data);
});

process.stdin.on('end', function(data) {
	console.log('--- END ---');
});

//write method stream
process.stdout.write('Hi Romeo');
