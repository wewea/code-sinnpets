var myObject = {
	a: 2
};

// [[Get]] operation follow [[Prototype]] chain
console.log(myObject.a);

// Object.create
var anotherObject = {
	a: 2
};

var theObject = Object.create(anotherObject);
// a
for (var i in theObject) {
		console.log(i);
}

console.log("a" in theObject); // true


// implict shadowing
console.log(
anotherObject.hasOwnProperty('a'), // true
theObject.hasOwnProperty('a')			// false
);

console.log(anotherObject.a); // 2
console.log(theObject.a);     // 2

theObject.a++; // [[PUT]] implict shadowing

console.log(anotherObject.a); // 2
console.log(theObject.a);     // 3

console.log(theObject.hasOwnProperty('a')); // true

