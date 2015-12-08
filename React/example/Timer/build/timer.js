'use strict';

// state发生变化, 组件就会重新渲染
var Timer = React.createClass({
	displayName: 'Timer',

	getInitialState: function function_name() {
		return { seconds: 0 };
	},
	tick: function tick() {
		this.setState({ seconds: this.state.seconds + 1 });
	},
	componentDidMount: function componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnMount: function componentWillUnMount() {
		clearInterval(this.interval);
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			' Seconds Elapsed: ',
			this.state.seconds,
			' '
		);
	}
});

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer'));