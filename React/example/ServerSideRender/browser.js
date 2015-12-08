var React = require('react'),
	  ReactDOM = require('react-dom'),
		App = React.createFactory(require('./app.js'));

ReactDOM.render(App(window.APP_PROPS), document.getElementById('content'))


