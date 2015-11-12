var Eventproxy = require('eventproxy');
var ep = new Eventproxy();

ep.tail('event1', 'event2', function (data1, data2) {
	console.log('trigger tail');
});

ep.emit('event1', null);

setInterval(function () {
	ep.emit('event2', null);
}, 1000);

