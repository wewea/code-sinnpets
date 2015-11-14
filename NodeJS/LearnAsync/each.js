var http = require('http');
var async = require('async');

var argv = process.argv.slice(2);

async.each(argv, function (item, callback) {
	http.get(item, function (err, res) {
	}).on('error', function (err) {
		callback(err);
	});
}, function (err) {
	if (err) {
		console.log(err);
	}
});
