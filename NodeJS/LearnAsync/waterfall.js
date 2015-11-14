var http = require('http');
var async = require('async');
var fs = require('fs');

async.waterfall([
	function (cb) {
		fs.readFile(process.argv[2], 'utf-8', cb);
	},
  function (url, cb) {
		http.get(url, function (res) {
			var content = '';
			res.on('data', function (data) {
				content += data;
			});

			res.on('end', function () {
				console.log(content);
				cb(null, content);
			})
		}).on('error', function (err) {
			cb(err);
		});
	}
], function (err, results) {
	if (err) console.log(err);
});


