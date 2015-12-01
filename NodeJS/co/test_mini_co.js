var co = require('./mini_co.js');

function readFile(filename) {
	return function (callback) {
		require('fs').readFile(filename, 'utf-8', callback);
	};
}

co(function *() {
	var file1 = yield readFile('./a.txt');
	var file2 = yield readFile('./b.txt');

	console.log(file1);
	console.log(file2);
	return 'done';
})(function (error, result) {
	if (error) {
		console.log(error);
	}

	console.log(result);
});
