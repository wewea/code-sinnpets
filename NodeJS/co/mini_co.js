//https://github.com/ltebean/simple-co
function co(generator) {
	return function (fn) {
		var gen = generator();

		function next(error, result) {
			if (error) {
				fn(error);
			}

			var step = gen.next(result);
			if (!step.done) {
				step.value(next);
			} else {
				fn(null, step.value);
			}
		}
		next();
	};
}

module.exports = co;
