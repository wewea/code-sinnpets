var myObj = {};

Object.defineProperty(myObj, "a", {
	value: 2,
	enumerable: true,
});

Object.defineProperty(myObj, "b", {
	value: 2,
	enumerable: false,
});

console.log("b" in myObj); // true

for (var i in myObj) {
	console.log(i);
}


console.log(
myObj.propertyIsEnumerable("a"), // true
myObj.propertyIsEnumerable("b")  // false
);

console.log(Object.keys(myObj)); // ['a']
console.log(Object.getOwnPropertyNames(myObj)); // ['a', 'b']
