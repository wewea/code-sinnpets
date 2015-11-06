function Foo() {
	this.a = 2
};

Foo.prototype.hey = function () {
	console.log('hey');
};

var foo = new Foo();

console.log(foo.hasOwnProperty('a')); // true
console.log(foo.hasOwnProperty('hey')); // false
