var EventProxy = require('eventproxy');
var ep = new EventProxy();

// emit before add listener, can not trigger
ep.emit('event', 'Hello World');

ep.on('event', function (data) {
	console.log(data);
});

ep.emit('event', 'What the Fxxx');

ep.fail(function (err) {
	console.log('fail:', err);
});

function foo() {
	ep.emit('error', 'foo');

	console.log('after emit'); // execute
}

foo();
