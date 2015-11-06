function Foo() {
	
};

// replace the default object when Foo declare
Foo.prototype = {};

var a = new Foo();

console.log(a.constructor === Foo);   // false
// find constructor property
// -> a -> Foo.prototype-> Object.prototype (found)
console.log(a.constructor === Object); // true

console.log(a instanceof Foo); // true
console.log(a instanceof Function); // false
console.log(a instanceof Object); // true

console.log(Foo.prototype.isPrototypeOf(a)); // true
console.log(Object.prototype.isPrototypeOf(a)); //true

