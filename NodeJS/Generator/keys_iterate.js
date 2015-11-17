'use strict';
var obj = {
	a: 'hello',
	b: 'world'
};

for (let key of Object.keys(obj)) {
	console.log(key + ':' + obj[key]);
}

function *entries(obj) {
	for (let key of Object.keys(obj)) {
		yield [key, obj[key]];
	}
}

for (let value of entries(obj)) {
	console.log(value);
}
