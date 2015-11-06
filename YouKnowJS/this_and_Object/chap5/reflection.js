function isRelatedTo(o1, o2) {
	function F() {};
	F.prototype = o2;
	// left object, right function
	return o1 instanceof F;
}

var a = {};
var b = Object.create(a);

console.log(isRelatedTo(b, a)); // true

// two object
console.log(a.isPrototypeOf(b)); // true


function Foo() {
	
};

var c = new Foo();

// get [[Prototype]]
console.log(Object.getPrototypeOf(c) === Foo.prototype); // true

// or
console.log(c.__proto__ === Foo.prototype); // true

