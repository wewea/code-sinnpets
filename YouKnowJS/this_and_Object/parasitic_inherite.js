// parasitic inheritance

function Vehicle() {
	this.engines = 1;
}

Vehicle.prototype.ignition = function () {
	console.log('Turing drive');
};

Vehicle.prototype.drive = function () {
	this.ignition();
	console.log('Streeing and moving forward');
};

function Car() {
	var car = new Vehicle();

	car.wheels = 4;

	var veDrive = car.drive;

	car.drive = function () {
		veDrive.call(this);
		console.log('Rolling on ' + this.wheels + ' wheels');
	};

	return car;
}

// Car can call without new, because discard the initial create object and  avoid garbage collection
var myCar = new Car();

myCar.drive();

Vehicle.prototype.say = function () {
	console.log('woooo');
};

// compare with pseudopolymorphism, it was affect by prototype when it add a property with inherits class
myCar.say();
