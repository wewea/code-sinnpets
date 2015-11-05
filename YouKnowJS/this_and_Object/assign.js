var array = [];
var func = function () {
	
};

var anotherObj = {};

var myObj = {
	a: 2,
	otherArray: array,
	otherFunc: func,
	otherObject: anotherObj,
};

// shallow copy
var newObj = Object.assign({}, myObj);

console.log(newObj.a);
console.log(newObj.otherFunc === func);
console.log(newObj.otherArray === array);
console.log(newObj.otherObject === anotherObj);
