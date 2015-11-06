// Object.create is hero
// delegate property without confuse thing like .prototype and
// .constructor and new that acting like class 
var foo = {
	something: function () {
		console.log('Tell me something');
	}
}

var bar = Object.create(foo);
bar.something();

// dictionaries
var dict = Object.create(null);
console.log("toString" in dict); // false
console.log("toString" in Object.prototype); // true
