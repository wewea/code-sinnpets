var g = function *() {
	while (true) {
		try {
			yield;
		} catch(e) {
			if (e != 'a') throw e;
			console.log('内部捕获:', e);
		}
	}
}

var i = g();
i.next();

try {
	// 遍历器的throw方法可以将错误传到Generator中进行处理, 如果Generator没有处理错误, 则被外部的try-catch捕获
	i.throw('a');
	i.throw('b');
} catch (e) {
	console.log('外部捕获:', e);
}

var gen = function *() {
	yield console.log('hello');
	yield console.log('world');
}

var iter = gen();
iter.next();

try {
	iter.throw();
} catch (e) {
	console.log(iter.next()); // 不是world, 遍历器throw之后遍历器状态转为终止
}
