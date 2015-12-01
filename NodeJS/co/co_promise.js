var co = require('co');

co(function *() {
	return yield Promise.resolve(1);
}).then(function (val) {
	console.log(val);
}).catch(function (err) {
	console.log(err);
});

co(function *() {
	var a = Promise.resolve(1);
	var b = Promise.resolve(2);
	var c = Promise.resolve(3);
	console.log(a);
	var res = yield [a, b, c];

	console.log(res);
});
