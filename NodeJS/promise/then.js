var onRejected = console.error.bind(console);

// return promise to rejected in then
var promise = Promise.resolve();
promise.then(function () {
	return Promise.reject(new Error('this promise is rejected')); // unwarp promise;
}).catch(onRejected);

var p = Promise.resolve();

//A
//B
p.then(function () {
	console.log('A'); // try not return
})
.then(function () {
	console.log('B');
})

//reject
//up
var p2 = Promise.reject();
p2.then(function () {
	console.log('resolve');
}, function () {
	console.log('reject');
	//  return Promise.ject to control return promise onRejected
	// return Promise.reject();
})
 .then(function () {
	 console.log('up');
 }, function () {
	 console.log('down');
 });
