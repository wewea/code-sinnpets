function *foo() {
	yield 1;
	yield 2;
	return  'done';
}

var iter = foo();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// foo() return iterator which its has [Symbol.iterator] property, and do return this;
for (var s of foo()) {
	console.log(s);
}
