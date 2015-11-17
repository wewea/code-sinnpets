function makeIter(array) {
	var nextIndex = 0;
	return {
		next: function () {
			return (nextIndex < array.length) ? 
				{value: array[nextIndex++], done: false} :
				{value: undefined, done: true};
		}
	}
}

var iter = makeIter([1, 2, 3]);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var array = [1 , 2, 3];
// Array has own iterator
for (var a of array) {
	console.log(a);
}

var arrIter = array[Symbol.iterator]();
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
