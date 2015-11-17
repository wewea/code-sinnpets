function *gen() {
	console.log('Start');
	console.log(`1: ${yield}`);
	console.log(`2: ${yield}`);
	return 'result';
}

var genIter = gen();

genIter.next();
genIter.next('a');
genIter.next('b');
