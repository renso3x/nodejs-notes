const fs = require('fs');
// readfile and write file
// fs.readFile('./readme.txt', 'utf8', function(err, data) {
// 	fs.writeFileSync('writeMe.txt', data);
// });

fs.unlink('./stuff/writeMe.txt', function() {
	fs.rmdir('stuff');
});

// fs.mkdirSync('stuff');

// fs.rmdirSync('stuff');

// create directories
// fs.mkdir('stuff', function() {
// 	fs.readFile('./readme.txt', 'utf8', function(err, data) {
// 		fs.writeFile('./stuff/writeme.txt', data);
// 	});
// });
