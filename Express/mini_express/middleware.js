var http = require('http');
var url = require('url');

var app = {};

app.use = function (route, fn) {
	if (typeof route === 'function') {
		fn = route;
		route = '/';
	}

	this.handlers.push({route: route, fn: fn});
}

app.handle = function (req, res) {
	var index = 0;
	var path = url.parse(req.url).pathname;
	console.log('path:', path);

	function next() {
		var handler = app.handlers[index++];
		if (path === handler.route || handler.route === '/') {
			handler.fn.apply(this, [req, res, next]);
		} else {
			next();
		}
	}

	next();
}

exports.createServer = function () {
	app.handlers = [];
	var server = http.createServer(app.handle);
	app.listen = server.listen.bind(server);
	return app;
}
