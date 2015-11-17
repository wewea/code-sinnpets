// 使用遍历器实现指针结构
'use strict';
function Node(value) {
	this.value = value;
	this.next = null;
}

Node.prototype[Symbol.iterator] = function () {
	var iterator = {
		next: next
	};

	var current = this;

	function next() {
		if (current) {
			var value = current.value;
			var done = current == null;
			current = current.next;
			return {
				value: value,
				done: done
			};
		} else {
			return {
				done: true
			};
		}
	}

	return iterator;
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);

one.next = two;
two.next = three;

for (let s of one) {
	console.log(s);
}
