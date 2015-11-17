var Promise = require('bluebird');

var promise = Promise.resolve();

promise.then(function () {
	// pass to catch
	throw new Error('exception when resolve');
}).catch(function (value) {
	console.log(value);
});

promise = Promise.reject();

promise.then(function () {
	// not trigger fulfilled
	console.log('fulfilled');
}).catch(function (value) {
	console.log(value || '' + 'rejected');
});
