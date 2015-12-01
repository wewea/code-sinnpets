var Promise = require('bluebird');

var p = Promise.resolve();

p.then(function () {
	// print error to console
	foo();
});

setTimeout(function() { 	
	console.log('continue');
}, 10);
