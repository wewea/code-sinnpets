var p = Promise.resolve();

p.then(function () {
	foo();
})
 .catch(function (error) {
	 // slient igonre
	 throw error;
})
 .catch(function (error) {
	 setTimeout(function () {	
		 // throw outside promise
		 throw error;
	 }, 0);
 });


setTimeout(function () {
	console.log('A');
	setTimeout(function() { 	
		console.log('B');
 	}, 0);
}, 10);

