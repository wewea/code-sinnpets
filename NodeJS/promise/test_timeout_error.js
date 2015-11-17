var TimeoutError = require('./timeout_error.js');

var promise = Promise.reject(new TimeoutError('test'));

promise.catch(function (error) {
	console.log(error instanceof TimeoutError);
	console.log(error);
});
