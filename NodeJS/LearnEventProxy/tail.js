var Eventproxy = require('eventproxy');
var ep = new Eventproxy();

ep.tail('event1', 'event2', function (data1, data2) {
	console.log('data1: ' + data1 + ' data2: ' + data2);
});

ep.emit('event1', 1);

setInterval(function () {
	ep.emit('event2', 2);
}, 1000);

