function *foo() {
	yield 2;
	yield 3;

	return 'hello';
}

function *bar() {
	yield 1;
	var res = yield *foo();
	yield 4;
	console.log(res);
}

for (var v of bar()) {
	console.log(v);
}
