var myArray = [1, 2, 3];

for (var v of myArray) {
	console.log(v);
}

var it = myArray[Symbol.iterator]();
console.log(
	it.next(),
	it.next(),
	it.next(),
	it.next()
);

// 自定义iterator object
var myObj = {
	a: 2,
	b: 3
};

Object.defineProperty(myObj, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function () {
		var o = this;
		var idx = 0;
		var ks = Object.keys(this);
		return { 
			next: function () {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
});

for (var v of myObj) {
	console.log(v);
}

var it = myObj[Symbol.iterator]();
console.log(
it.next(),
it.next(),
it.next()
);

// infinite iterate
var random = {
	[Symbol.iterator]: function () {
		return {
			next: function () {
				return {value: Math.random()}
			}
		}
	}
};

var randoms = [];

for (var v of random) {
	randoms.push(v);
	
	if (randoms.length === 10) break;
}

console.log(randoms);

// no iterator
var noIt = {
	a: 2,
	b: 3
};
console.log('no iterator object:');
// undefined 
// for (var i of noIt) {
// 	console.log(i);
// }

