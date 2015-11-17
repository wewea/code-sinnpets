function *foo() {
	console.log('before A');
	yield 'A';
	console.log('before B');
	yield 'B';
	console.log('before C');
	return 'C';
}

var iter = foo();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for (var f of iter) {
	console.log(f);
}

function bar() {
	// error yield could not inside normal function
	yield 'A';
}

bar();
