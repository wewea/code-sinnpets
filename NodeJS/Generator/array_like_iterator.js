'use strict';
var arrayLike = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let s of arrayLike) {
	console.log(s);
}

// Array.prototype[Symbol.iterator] only useful in ArrayLikie Object
var notArrayLike = {
	a: 'a',
	b: 'b',
	c: 'c',
	length: 3,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let s of notArrayLike) {
	console.log(s); // undefined
}

// string is array like
var str = 'hello';

for (let s of str) {
	console.log(s);
}

