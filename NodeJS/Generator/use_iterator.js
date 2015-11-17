'use strict';
let set = new Set().add('a').add('b').add('c');

let [x, y] = set;
console.log('x:',x);
console.log('y:',y);

var str = 'hello';
console.log([...str]);

let generator = function* () {
	yield 1;
	yield* [2, 3, 4];
	yield 5;
}

var iter = 	generator();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for..of call iter.next()?
for (let s of iter) {
	console.log(s);
}
