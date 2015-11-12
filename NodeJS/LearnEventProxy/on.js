var Eventproxy = require('eventproxy');
var ep = new Eventproxy();

ep.on('event', function (data) {
	console.log('trigger on ' + data);
});

setInterval(function () {
	ep.emit('event', 'Hello World');
}, 1000);
