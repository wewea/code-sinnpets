var async = require('async');

// save result in every step
async.auto({
	ping: function (done) {
		done(null, 'ping');
	},
	pong: function (done, result) {
		console.log(result);
		done(null, 'pong');
	},
	start: ['ping', 'pong', function (done, result) {
		console.log(result);
		done(null, 'game start');
	}]
}, function (err, results) {
	if (err) {
		console.log(err);
	}
	console.log(results);
});
