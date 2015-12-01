var p = Promise.resolve();

p.then(function () {
	// swallow error
	foo();
});
