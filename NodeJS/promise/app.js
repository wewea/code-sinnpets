var Promise = require('bluebird');

function asyncFunc() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (Math.floor((Math.random()) * 10 % 2)) {
				resolve('Async resolve');
			} else {
				reject('Async reject');
			}
		}, 10);
	});
}

// then(onFulfilled).catch(onRejected)
asyncFunc().then(function (value) {
	console.log(value);
}).catch(function (err) {
	console.log('Catch error:', err);
});

// then(onFulfilled, onRejected)
asyncFunc().then(function (value) {
	console.log('fulfill:', value);
}, function (err) {
	console.log('rejeced:', err);
});
