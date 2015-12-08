'use strict';

var React = require('react');

var Counter = React.createClass({
	displayName: 'Counter',

	getInitialState: function getInitialState() {
		return { count: this.props.initialCount };
	},

	_increment: function _increment() {
		this.setState({ count: this.state.count + 1 });
	},

	render: function render() {
		return React.createElement(
			'span',
			{ onClick: this._increment },
			this.state.count
		);
	}
});

module.exports = Counter;
