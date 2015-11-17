var assert = require('assert');
var Promise = require('bluebird');


describe('normal test', function() {
	it('should need then(done, done)', function(done) {
		var promise = Promise.resolve();  
		// without return promise, you need then(done, done) to deal handle error
		promise.then(function (value) {
			assert(false);
		}).then(done, done);
	});

	it('should not need then(done, done)', function() {
		var promise = Promise.resolve(1);
		return promise.then(function (value) {
			assert(value === 1);
		});
	});
});  

describe('Promise test', function() {
	it('should fail', function() {
		return Promise.resolve().then(function () {
			assert(false);
		});
	});
});  

// helper
function shouldRejected(promise) {
	return {
		catch: function (fn) {
			// must return promise to mocha
			return promise.then(function () {
				throw new Error('Expected reject but fulfill');
			}, function (reason) {
				fn.call(promise, reason);
			});
		}
	};
}

describe('test should reject', function() {
	it('should be reject', function() {
		// if fulfill then throw error and test fail
		// var promise = Promise.resolve();
		var promise = Promise.reject(new Error('human error'));
		return shouldRejected(promise).catch(function (error) {
			assert(error.message === 'human error');
		});
	});
});  


function shouldFulfill(promise) {
	return {
		then: function (fn) {
			return promise.then(function (value) {
				fn.call(promise, value);
			}, function (reason) {
				throw reason;
			});
		}
	};
}

describe('test should fulfill', function() {
	it('should be fulfill', function() {
		var promise = Promise.resolve('fulfill');
		return shouldFulfill(promise).then(function (value) {
			assert('fulfill' === value);
		});
	});
});  
