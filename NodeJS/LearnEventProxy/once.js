var Eventproxy = require('eventproxy');
var ep = new Eventproxy();

ep.once('event', function (data) {
	console.log('trigger once ' + data);
});

setInterval(function () {
	ep.emit('event', 'Hello World');
}, 1000);
