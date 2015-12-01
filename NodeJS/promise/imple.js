// https://github.com/floatdrop/pinkie
'use strict';

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var NOOP = function () { };
var isNode = typeof process !== 'undefined' && typeof process.emit === 'function';

var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;


function Promise(resolver) {
	if (typeof resolver !== 'function') {
		throw new TypeError();
	}

	if (this instanceof Promise === false) {
		throw new TypeError();
	}

	this._then = [];
	invokeResolver(resolver, this);
}

Promise.prototype = {
	constructor: Promise,

	_handled: false,
	_then: null,
	_state: PENDING,
	_data: undefined,

	then: function (onFulfillment, onRejection) {
		var subscriber = {
			owner: this,
			then: new this.constructor(NOOP),
			fulfilled: onFulfillment,
			rejected: onRejection
		};

		if ((onFulfillment || onRejection) && !this._handled) {
			if (this._state === REJECTED && isNode) {
				asyncCall(notifyRejectionHandled, this);
			}
		}

		if (this._state === FULFILLED || this._state === REJECTED) {
			asyncCall(invokeCallback, subscriber);
		} else {
			this._then.push(subscriber);
		}

		return subscriber.then;
	},

	catch: function (onRejection) {
		return this.then(onRejection);
	}
};
