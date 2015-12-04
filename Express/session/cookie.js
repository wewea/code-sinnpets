var express = require('express');
var cookieParse = require('cookie-parser');

var app = express();
app.listen(3000);

app.use(cookieParse());

app.get('/', function (req, res) {
	if (req.cookies.isVisit) {
		console.log(req.cookies);
		res.send('欢迎再次访问');
	} else {
		res.cookie('isVisit', 1, {maxAge: 60 * 1000}); // cookie 60 秒过期
		res.send('欢迎第一次访问');
	}
});
