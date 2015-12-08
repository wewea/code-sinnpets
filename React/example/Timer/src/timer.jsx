// state发生变化, 组件就会重新渲染
var Timer = React.createClass({
	getInitialState: function function_name() {
		return {seconds: 0};
	},
	tick: function () {
		this.setState({seconds: this.state.seconds + 1});
	},
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnMount: function () {
		clearInterval(this.interval);
	},
	render: function () {
		return (
			<div> Seconds Elapsed: {this.state.seconds} </div>
		);
	}
});

ReactDOM.render(<Timer/>, 
							 document.getElementById('timer'));
