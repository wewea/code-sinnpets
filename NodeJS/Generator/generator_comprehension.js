'use strict';
function *gen() {
	for (var i=0; i < 6; ++i) {
		yield i;
	}
}

let square = (for(n of gen()) n * n);

console.log(...square);
