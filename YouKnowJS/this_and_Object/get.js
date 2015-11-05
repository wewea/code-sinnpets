// [[GET]] & [[PUT]]
function func() {
	console.log(a); // ReferenceError 'a' is not defined
}

// func();

var myObj = {
	a: 2
};

console.log(myObj.b); // undefined

// getter
var fuck = {
	get a() {
		return 2
	}
};

Object.defineProperty(fuck, "b", {
	get: function () {
		return this.a * 2;
	},
	enumerable: false
});


console.log(fuck.a); // 2
console.log(fuck.b); // 4

var shit = {
	get a() {
		return this._a_;
	},
	set a(val) {
		this._a_ =  2 * val
	}
}

shit.a = 2;
console.log(shit.a); // 4

for (var i in shit) {
	console.log(i); //a , _a_
}
