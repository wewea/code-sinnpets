function *gen() {
	yield 1;
	try {
		yield 2;
		yield 3;
	} finally {
		yield 4;
	}
	yield 5;
}

var iter = gen();

iter.next();
iter.next();
iter.return(7);
