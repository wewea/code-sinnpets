var myObject = {
	a: 2
};

console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

Object.defineProperty(myObject, "a", {
	value: 2,
	writable: false,
	configurable: true,
	enumerable: true
});

myObject.a = 3;

console.log(myObject.a);

// writable from false to true
Object.defineProperty(myObject, "a", {
	value: 2,
	writable: true,
	configurable: false,
	enumerable: true
});

myObject.a = 3;

console.log(myObject.a); // 3

// writable can trun from true to false, even configurable is false
Object.defineProperty(myObject, "a", {
	value: 2,
	writable: false,
	configurable: false,
	enumerable: true
});

// writable can not turn from false to true, if configurable is false
// Object.defineProperty(myObject, "a", {
// 	value: 2,
// 	writable: true,
// 	configurable: false,
// 	enumerable: true
// });

// can not delete property, if configurable is false
delete myObject.a;
console.log(myObject.a); // 2

myObject.b = 1;
console.log(myObject.b);

for (var prop in myObject) {
	console.log(prop);
}

console.log('set b [[enumerable]] = false');
Object.defineProperty(myObject, "b", {
	value: 1,
	writable: true,
	configurable: true,
	enumerable: false
});

for (var prop in myObject) {
	console.log(prop);
}

var myGetObj = {
	get a() {
		return this._a_; 
	},
	set a(val) {
		this._a_ = val;
	}
};

console.log(Object.getOwnPropertyDescriptor(myGetObj, 'a'));

