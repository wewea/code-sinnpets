function Foo(name) {
	// add name property to this
	this.name = name;
}

Foo.prototype.myName = function () {
	return this.name;
};

function Bar(name, label) {
	Foo.call(this, name);
	// add label property to this
	this.label = label;
};

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function () {
	return this.label;
};

var a = new Bar('a', 'obj a');

console.log(a.myName()); // a
console.log(a.myLabel());// obj a
