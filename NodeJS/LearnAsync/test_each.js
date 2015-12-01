var async = require('async');

async.each([1, 2, 3], function (item, callback) {
	console.log(item);
	//返回错误, 不影响其他task 的执行, eachSeries则会不执行剩下的任务
	callback('err');
	console.log('after err');
}, function (err) {
	if (err) {
		return console.log(err);
	}
	console.log('done');
});
