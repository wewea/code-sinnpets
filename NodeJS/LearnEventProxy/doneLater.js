var EventProxy = require('eventproxy');
var fs = require('fs');
var ep = EventProxy();

var arr = [1, 2, 3];

if (process.argv.length <= 2) {
	console.log('please enter an num as argument');
	process.exit(1);
}

function isOddSync(callback) {
	var res = parseInt(process.argv[2], 10);
	if (res % 2 === 0) {
		callback('not odd');
	} else {
		callback(null, res);
	}
}

// do nothing
isOddSync(function (err, res) {
	if (err) {
		ep.emit('error', err);
	} else {
		ep.emit('odd', res);
	}
});

//trigger odd and error
isOddSync(function (err, res) {
	if (err) {
		ep.emitLater('error', err);
	} else {
		ep.emitLater('odd', res);
	}
});

// clean and same as previous 
isOddSync(ep.doneLater('odd'));

ep.on('odd', function (data) {
	console.log('tigger odd, odd is:', data);
});

ep.fail(function (err) {
	console.log('trigger fail, error is:', err);
});
