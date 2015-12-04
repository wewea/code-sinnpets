var koa = require('koa');
var route = require('koa-route');
var koaStatic = require('koa-static');
var views = require('co-views');
var app = koa();

app.use(koaStatic(__dirname + '/public'));

app.use(function *(next) {
	this.render = views(__dirname + '/views', {
		map: {
			jade: 'jade'
		},
		default: 'jade'
	});
	yield next;
});

app.use(route.get('/', function *() {
	this.body = yield this.render('index');
	this.status = 200;
}));

app.use(route.get('/login', function *() {
	this.body = yield this.render('login');
	this.status = 200;
}));

app.listen(3000, function () {
	console.log('server listen on 3000');
});
