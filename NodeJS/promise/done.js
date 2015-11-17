var Promise = require('bluebird');

var promise = Promise.resolve();
promise.done(function () {
	// throw error to outside
	// JSON.parse('it is not a json');
});

promise.then(function () {
	JSON.parse('not a json');
}).catch(function (error) {
	// console.log(error);
	throw error;
});


