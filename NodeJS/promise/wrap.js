// wrap a callback style into a Promise-aware 

if (!Promise.wrap) {
	Promise.warp = function (fn) {
		return function () {
			var args = Array.from(arguments);

			return new Promise(function (resolve, reject) {
				fn.apply(null, 
								args.concat(function (err, res) {
									if (err) {
										reject(err);
									} else {
										resolve(res);
									}
								});
			});
		}	
	};
}
