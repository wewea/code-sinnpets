var async = require('async');
var http = require('http');
var url = require('url');

var argv = process.argv.slice(2);
var host = argv[0];
var port = argv[1];


var sendUserId = function (id, callback) {
	var options = {
		host: host,
		port: port,
		method: 'POST',
		path: '/users/create'
	};


	var req = http.request(options, function (res) {
		var body = '';

		res.on('data', function (data) {
		});	

		res.on('end', function () {
			callback();
		});
	});

	req.on('error', callback);

	var postData = JSON.stringify({'user_id': id});
	req.write(postData);
	req.end();
};

var getUser = function (callback) {
	var destUrl = url.format({
		protocol: 'http',
		slashes: true,
		hostname: host,
		port: port,
		pathname: '/users'
	});

	http.get(destUrl, function (res) {
		var body = '';
		res.on('data', function (data) {
			body += data;
		});

		res.on('end', function () {
			callback(null, body);
		});
	}).on('error', function (err) {
		callback(err);
	});
};

async.series({
	send: function (callback) {
		async.times(5, function (n, next) {
			sendUserId(n + 1, function (err) {
				next(err);
			});
		}, function (err) {
			if (err) callback(err);
			callback(null, 'save');
		});
	},
	get: function (callback) {
		getUser(callback);
	}
},
	function (err, results) {
	if (err) {
		console.log(err);
	}
	console.log(results.get);
});
