var co = require('co');

// 使用co模拟sleep
co(function *() {
	var now = Date.now();
	yield sleep(500);
	console.log(Date.now() - now);
});


function sleep(time) {
	return function (cb) {
		setTimeout(cb, time);
	}
}


