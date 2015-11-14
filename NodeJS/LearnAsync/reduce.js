var async = require('async');
var http = require('http');
var querystring = require('querystring');
var urllib = require('url');

var argv = process.argv.slice(2);

var url = argv[0];

function sendQuery(queryNumber, callback) {
	var query = querystring.stringify({'number': queryNumber});
	var queryUrl = url + '?' + query;
	http.get(queryUrl, function (res) {
		var body = '';
		res.on('data', function (data) {
			body += data;
		});

		res.on('end', function () {
			callback(null, Number(body));
		});
	}).on('error', function (err) {
		callback(err);
	});
}

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
	sendQuery(item, function (err, item) {
		if (err) callback(err);
		// console.log('memo:'+ memo, ' item:' + item);
		callback(null, memo + item);
	});
}, function (err, result) {
	if (err) console.log(err)
	console.log(result);
});
