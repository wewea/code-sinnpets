var EventProxy = require('eventproxy');
var ep = new EventProxy();

// trigger if any event which was register
ep.any('ev1', 'ev2', function (data1, data2) {
	if (data1) {
		console.log('trigger ev1');
	}

	if (data2) {
		console.log('trigger ev2');
	}
});

ep.emit('ev1');
