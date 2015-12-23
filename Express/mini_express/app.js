var express = require('./middleware.js');

var app = express.createServer();

app.use(function (req, res, next) {
	res.write('Hello');	
	next();
});

app.use('/world', function (req, res, next) {
	res.write(' World');
	next();
});

app.use('/error', function (req, res, next) {
	res.write(' error');
	next();
});

app.use(function (req, res) {
	res.end('');
});

app.listen(3000, function () {
	console.log('listen on 3000');
});

