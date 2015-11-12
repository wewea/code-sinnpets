var Eventproxy = require('eventproxy');
var ep = new Eventproxy();

ep.all('event1', 'event2', function (data1, data2) {
	console.log('trigger all');
});

ep.emit('event1');

setInterval(function () {
	ep.emit('event2');
}, 1000);
