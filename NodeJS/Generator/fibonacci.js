function *fibonacci() {
	var fn1 = 1;
	var fn2 = 1;

	while (true) {
		var current = fn1;
		fn1 = fn2;
		fn2 = fn1 + current;
		var reset = yield current;
		if (reset) {
			fn1 = 1;
			fn2 = 1;
		}
	}
}

var iter = fibonacci();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next(true));
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
