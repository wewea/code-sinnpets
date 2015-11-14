var async = require('async');
var http = require('http');

var url = process.argv[2];

var requestBody = '';
var count = 0;

async.whilst(
	function () {
		return !/meerkat/.test(requestBody.trim());
	},
	function (callback) {
		http.get(url, function (res) {
			var body = '';
			res.on('data', function (data) {
				body += data;
			});
			res.on('end', function () {
				requestBody = body.trim();
				++count;
				callback();
			});
		}).on('error', callback);
	},
	function (err) {
		if (err) console.log(err);
		console.log(count);
	}
);
