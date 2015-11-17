var onRejected = console.error.bind(console);

// return promise to rejected in then
var promise = Promise.resolve();
promise.then(function () {
	return Promise.reject(new Error('this promise is rejected'));
}).catch(onRejected);
