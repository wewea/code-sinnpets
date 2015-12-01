var async = require('async');

async.reject([1, 2, 3], function (item, callback) {
	callback(item < 1);
}, function (result) {
	console.log(result);
});

