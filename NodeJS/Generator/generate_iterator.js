'use strict';
var obj = {
	*[Symbol.iterator]() {
		yield 'hello';
		yield 'world';
	}
}

for (let s of obj) {
	console.log(s);
}

function *foo() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

for (let s of foo()) {
	console.log(s);
}

var fooIter = foo();
console.log(fooIter.next());
console.log(fooIter.next());
console.log(fooIter.next());
console.log(fooIter.next());

