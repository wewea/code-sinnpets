var async = require('async');
var http = require('http');

var argv = process.argv.slice(2);

async.map(argv, function (item, done) {
	http.get(item, function (res) {
		var content = '';
		res.on('data', function (data) {
			content += data;
		});
		res.on('end', function () {
			done(null, content);
		});
	}).on('error', function () {
		done(err);
	});
}, function (err, results) {
	if (err) {
		console.log(err);
	}
	console.log(results);
});

