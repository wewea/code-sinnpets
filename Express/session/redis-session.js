// 将session 存在redis中, 需要启动redis服务器
var express = require('express');
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var app = express();
app.listen(3000);

app.use(session({
	store: new redisStore(),
	secret: 'secrettoken'
}));

app.get('/', function (req, res) {
	console.log(req.session);
	if (req.session.isVisit) {
		req.session.isVisit++;
		res.send('<p>第 ' + req.session.isVisit + ' 次访问') ;
	} else {
		req.session.isVisit = 1;
		res.send('欢迎第一次访问');
	}
});


