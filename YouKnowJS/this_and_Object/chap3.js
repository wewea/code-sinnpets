var toString = Object.prototype.toString;

function MyFunc() {
	
}

var string = '';
console.log(typeof string); // string

var str = new String('');
console.log(toString.call(str));  // [object String]
console.log(typeof str); // object

var num = new Number('1');
console.log(toString.call(num));

var reg = new RegExp('/');
console.log(toString.call(reg));

var bool = new Boolean(false);
console.log(toString.call(bool));

var func = new Function();
console.log(toString.call(func));

var date = new Date();
console.log(toString.call(date));

var error = new Error();
console.log(toString.call(error));

var arr = new Array();
console.log(toString.call(arr));

var obj = new Object();
console.log(toString.call(obj));

var myfunc = new MyFunc();
console.log(toString.call(myfunc)); // [object Object]
