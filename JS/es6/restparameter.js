'use strict';
function foo(a, b) {
	var args = Array.prototype.slice.call(arguments, foo.length);
	console.log(args);
}

foo(1, 2, 3);

// rest parameter
// function bar(a, b, ...args) {
// 	console.log(args);
// }

// bar(3, 2, 1);
function baz(...args) {
	console.log(args.length);
}

baz();
baz(5);
baz(5, 6, 7);



