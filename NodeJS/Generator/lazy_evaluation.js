'use strict';
function *calc() {
	yield 123 + 345;
}

var iter = calc();

setTimeout(function () {
	console.log(iter.next());
}, 10);

