function *gen() {
	yield 1;
	yield 2;
}

var iter = gen();

console.log(iter.next());
console.log(iter.return('stop'));
console.log(iter.next());
