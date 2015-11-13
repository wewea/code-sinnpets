var EventProxy = require('eventproxy');
var ep = new EventProxy();

// trigger any event not 'the one'
ep.not('the one', function () {
	console.log('not trigger the one');
});

ep.emit('not the one');

