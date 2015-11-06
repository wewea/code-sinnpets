// avoid this 

var Something = {
	cool: function () {
		this.greetring = 'Hello World';
		this.count = this.count ? this.count + 1 : 1;
	}
};

Something.cool();
console.log(
Something.greetring,
Something.count
);

var Another = {
	cool: function () {
		Something.cool.call(this);
	}
};

Another.cool();
console.log(
Another.greetring,
Another.count
);
