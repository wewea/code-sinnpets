// explict pseudopolymorphism
function mixin(sourceObj, targetObj) {
	for (var key in sourceObj) {
		if (!(key in targetObj)) {
			targetObj[key] = sourceObj[key];
		}
	}

	return targetObj; 
}

var Vehicle = {
	engines: 1,
	arr: [1, 2],

	iginition: function () {
		console.log('Turning on my engine ');
		// console.log(this);
	},

	drive: function () {
		this.iginition();
		console.log('Steering and moveing forward');
	}
};

var Car = mixin(Vehicle, {
	wheels: 4,

	drive: function () {
		Vehicle.drive.call(this); // explict pseudopolymorphism
		console.log('Rolling on all ' + this.wheels + ' wheels');
	}
});


// Car.iginition(); // this->Car
Car.drive();

// affect each other after mixin
console.log(Car.arr); // [1, 2]

Vehicle.arr.push(3);

console.log(Car.arr); // [1, 2, 3]


