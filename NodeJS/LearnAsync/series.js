var async = require('async');
var http = require('http');

var argv = process.argv.slice(2);

function get(url, cb) {
	http.get(url, function (res) {
		var content = '';
		res.on('data', function (data) {
			content += data;
		});

		res.on('end', function () {
			cb(null, content);
		});
	}).on('error', function (err) {
		cb(err);
	});
}

async.series({
	requestOne: function (done) {
		get(argv[0], done);
	},
	requestTwo: function (done) {
		get(argv[1], done);
	}
}, function (err, results) {
	if (err) {
		console.log(err);
	}
	console.log(results);
});
