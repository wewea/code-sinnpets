var fs = require('fs');
var thunkify = require('./thunkify.js');

var read = thunkify(fs.readFile);

read('./a.txt', 'utf-8')(function (err, str) {
	if (err) {
		return console.error(err);
	}

	console.log(str);
})
