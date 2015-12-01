var async = require('async');

async.filter([1, 3, 5], function (item, done) {
	done(item > 1);
}, function (results) {
	console.log(results);
});
