var clock = function* (_) {
	while (true) {
		yield _;
		console.log('tick');
		yield _;
		console.log('tock');
	}
}
