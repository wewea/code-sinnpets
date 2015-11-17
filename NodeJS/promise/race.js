var Promise = require('bluebird');

function delayPromise(ms) {
	return new Promise(function (resolve) {
		setTimeout(resolve, ms);
	});
}

function timeoutPromise(promise, ms) {
	var timeout = delayPromise(ms).then(function () {
		throw new Error('Operation time out after '+ ms + 'ms');
	});

	return Promise.race([promise, timeout]);
}

var taskPromise = new Promise(function (resolve) {
	var delay = Math.random() * 2000;
	console.log(delay);
	setTimeout(function () {
		resolve(delay + 'ms');
	}, delay);
});

timeoutPromise(taskPromise, 1000).then(function (value) {
	console.log('在规定事件内结束: ' + value);
}).catch(function (error) {
	console.log('发生超时:', error);
});
