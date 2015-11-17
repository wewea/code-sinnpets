var EventProxy = require('eventproxy');
var ep = new EventProxy();

ep.on('event', function () {
	console.log('first');
});

ep.on('event', function () {
	console.log('second');
});

ep.headbind('event', function () {
	console.log('last');
})

ep.emit('event');

ep.bindForAll(function () {
	console.log('bind all');
});

ep.emit('trigger bindForAll');

ep.immediate('asap', function (data) {
	console.log(data);
}, 'trigger asap');


