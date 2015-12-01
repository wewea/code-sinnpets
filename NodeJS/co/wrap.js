var co = require('co');

// co.wrap , convert generator into a regular function that return Promise
var fn = co.wrap(function *(val) {
	return yield Promise.resolve(val);
});

fn(true).then(function (val) {
	console.log(val);
});

// ep Promise.resolve(val).then(fn(val))
