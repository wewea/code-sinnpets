'use strict';
class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}

	[Symbol.iterator]() {return this;}
	
	next() {
		var value = this.value;
		if (value < this.stop) {
			this.value++;
			return {value: value, done: false};
		} else {
			return {value: undefined, done: true};
		}
	}
}

function range(start, stop) {
	return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
	console.log(value);
}
