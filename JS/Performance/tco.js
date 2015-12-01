function factorial(n) {
	function fact(n, res) {
		if (n < 2) return res;

		return fact(n - 1, n * res);
	}

	return fact(n, 1);
}

function fac(n) {
	if (n < 2) return 1;
	var res = fac(n - 1);
	return n * res;
}

// not tco
function memoryOut(n) {
	if (n > 1000000) {
		return 1;
	}
	var res =  0 + memoryOut(n + 1);
	return res;
}

function noBound(n) {
	if (n > 10000000) return;
	return noBound(n + 1);
}

noBound(0);

// console.log(memoryOut(0));

// console.log(factorial(5));

