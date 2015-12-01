var assert = require('assert');

function thunkify(fn) {
	assert('function' === typeof fn, 'function required');

	return function () {
		var args = Array.from(arguments);
		var ctx = this;

		return function (done) {
			var called;
			args.push(function () {
				if (called) return;	
				called = true;
				done.apply(null, arguments);
			});

			try {
				fn.apply(ctx, args);
			} catch (e) {
				done(err);
			}
		}
	}
};

module.exports = thunkify;

