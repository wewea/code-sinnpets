var http = require('http'),
	  browserify = require('browserify'),
		literalify = require('literalify'),
		React = require('react'),
		ReactDOMServer = require('react-dom/server'),
		DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script,
		App = React.createFactory(require('./app.js')); // 工厂函数和React.DOM.div一样 都是可以接受参数, 返回ReactElement的工厂函数

http.createServer(function (req, res) {
	if (req.url == '/') {
		res.setHeader('Content-Type', 'text/html')

		var props = {
			items: [
				'Item 0',
				'Item 1',
				'Item </script>',
				'Item <!--inject!-->',
			]
		}

		var html = ReactDOMServer.renderToStaticMarkup(body(null,
				div({id: 'content', dangerouslySetInnerHTML: {__html:
						ReactDOMServer.renderToString(App(props))
			}}),

				script({dangerouslySetInnerHTML: {__html:
				'var APP_PROPS = ' + safeStringify(props) + ';'
				}}),

				script({src: '//fb.me/react-0.14.3.js'}),
				script({src: '//fb.me/react-dom-0.14.3.js'}),
				script({src: '/bundle.js'})
		 ));

		 res.end(html)
	} else if (req.url == '/bundle.js') {
		res.setHeader('Content-Type', 'text/javascript');

		browserify()
			.add('./browser.js')
			.transform(literalify.configure({
				'react': 'window.React',
				'react-dom': 'window.ReactDOM',
			}))
			.bundle()
			.pipe(res)

	} else {
		res.statusCode = 404;
		res.end()
	}
}).listen(3000, function (err) {
	if (err) throw err
		console.log('listen on http://localhost:3000');
});


// escape json
function safeStringify(obj) {
	return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
