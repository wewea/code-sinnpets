var array = [1, 2];
var myObject = {
	a: 2,
	arr: array,
};

// Object.preventExtensions 
Object.preventExtensions(myObject);

myObject.b = 3;
console.log(myObject.b); // undefined

// Object.seal
Object.seal(myObject);
myObject.a = 4;
console.log(myObject.a); // writable, 4

Object.freeze(myObject);
myObject.a = 5;
console.log(myObject.a); // not writable, 4

myObject.arr.push(3);
console.log(myObject.arr); // can not affect reference property
