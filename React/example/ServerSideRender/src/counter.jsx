var React = require('react');

var DOM = React.DOM,
		div = DOM.div,
		button = DOM.button,
		ul = DOM.ul,
		li = DOM.li;

module.exports = React.createClass({
	getInitialState: function () {
		return {items; this.props.items, disabled: true}
	},

	componentDidMount: function () {
		this.setState({disabled: false})
	},

	handleClick: function () {
		this.setState({
			items: this.state.items.concat('Item ' + this.state.items.length);
		})
	},


});
