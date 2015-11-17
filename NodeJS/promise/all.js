var Promise = require('bluebird');

function foo() {
	return Promise.resolve('foo');
}

function bar() {
	return Promise.resolve('bar');
}

function all() {
	return Promise.all([foo(), bar()]);
}

all().then(function (value) {
	console.log(value);
}).catch(function (error) {
	console.log(error);
});

var start = Date.now();


function timePromisefy(delay) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(Date.now() - start);
		}, delay);
	}); 
}


// 并行执行
Promise.all([
	timePromisefy(1),
	timePromisefy(32),
	timePromisefy(64),
	timePromisefy(128)
]).then(function (results) {
	console.log(Date.now() - start + 'ms');
	console.log(results);
});
