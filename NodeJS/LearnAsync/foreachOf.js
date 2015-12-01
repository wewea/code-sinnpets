var async = require('async');

var obj = {'foo': 300, 'bar': 200, 'baz': 500};

function forEachOf() {
	async.forEachOf(obj, function (item, index, done) {
		setTimeout(function() { 
			console.log('item: ' + item + ' index: ' + index);
			// must call after completed
			done();
		}, item);

	}, function (err) {
		if (err) {
			console.log(err);
		}
	});
}

function forEachOfSeries() {
	async.forEachOfSeries(obj, function (item, index, done) {
		setTimeout(function() { 
			console.log('item: ' + item + ' index: ' + index);
			// must call after completed
			done();
		}, item);
	}, function (err) {
		if (err) {
			console.log(err);
		}
	});
}

// forEachOf();

forEachOfSeries();

