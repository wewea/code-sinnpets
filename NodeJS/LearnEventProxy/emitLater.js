var fs = require('fs');
var EventProxy = require('eventproxy');
var ep = new EventProxy();

function syncEmit() {
	ep.emit('event', 'emit in sync');
}

function asyncEmit() {
	ep.emitLater('event', 'emit in async');
}

syncEmit(); // not thing
asyncEmit() // emit in async

ep.on('event', function (data) {
	console.log(data);
});


