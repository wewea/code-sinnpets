var log = console.log;

function *gen() {
	yield 1;
	try {
		yield 2;
		yield 3;
	} finally {
		console.log('clean up');
	}
	yield 5;
}

var iter = gen();

// log(iter.next());
// log(iter.next());
// // node does not implemet iter.retrun
// log(iter.return('hello world'));
// log(iter.next());
// log(iter.next());

for (var v of iter) {
	console.log(v);
	if (v === 3) {
		break;
	}
}

