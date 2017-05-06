const connect = require('connect');
const bodyParser = require('body-parser');
const rawBody = require('raw-body');

function type(type, fn) {
	return function(req, res, next){
		var ct = req.headers['content-type'] || '';
		if (0 != ct.indexOf(type)) {
			return next();
		}
		fn(req, res, next);
	}
}

const app = connect()
	.use(type('application/x-www-form-urlencoded', rawBody({ limit: '64kb' })))
	.use(type('application/json',rawBody({ limit: '32kb' })))
	.use(type('image', rawBody({ limit: '2mb' })))
	.use(type('video', rawBody({ limit: '300mb' })))
	.use(bodyParser())
	.use(function(req, res) {
		// .. do stuff to register the user ..
		// console.log(req.body);
		// console.log(req.query);
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(req.query));
	}).listen(3000);
