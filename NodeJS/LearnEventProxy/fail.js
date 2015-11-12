var Eventproxy = require('eventproxy');
var fs = require('fs');
var ep = new Eventproxy();

// fs.readFile is async function, so it can emit error event, though it call before ep.fail and ep.bind
fs.readFile('noExist.txt', ep.done('read_file'));

ep.fail(function (error) {
	console.log('trigger fail, ' + error);
});

ep.bind('error', function (err) {
	ep.unbind();

	console.log('trigger error event');
});

// only trigger fail, after ep.bind('error') or ep.fail
ep.emit('error', 'emit error');
