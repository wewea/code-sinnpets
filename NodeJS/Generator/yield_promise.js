function foo() {
	return Promise.resolve('woo');
}

function *main() {
	try {
		var res = yield foo();
		console.log('res:', res);
	} catch (e) {
		console.log(e);
	}
}

var it = main();

var p = it.next().value; // Promise return from foo

p.then(function (val) {
	it.next(val);
})
.catch(function (err) {
	it.throw(err);
});
