'use strict';
function *foo() {
	yield 1;
	yield 2;
}

function *bar() {
	yield 3;
	yield* foo();
	yield 4;
}

for (let s of bar()) {
	console.log(s);
}

//3
//1
//2
//4


// yield* 等同于 for..of
function *gen() {
	yield* [1, 2, 3];
}

var iter = gen();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// yield* 可以返回值

function *genFuncWithReturn() {
	yield 'a';
	yield 'b';
	return  'the result';
}

function *logReturned(genObj) {
	var result = yield* genObj;
	console.log(result);
}

var genArr = [...logReturned(genFuncWithReturn())];
console.log(genArr); // ['a', 'b']

