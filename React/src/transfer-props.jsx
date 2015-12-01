var _ = require('underscore');

// 使用es7 的剩余和扩展
var CheckBox = React.createClass({
	render: function () {
		var {checked, ...other} = this.props;
		var fancyClass = checked ? 'FancyChecked' : 'FancyUnChecked';
		return (
			// 将other属性批量传给子级
			<div {...other} className={fancyClass} />
		) 
	}

});

var Box = React.createClass({
	render: function () {
		var checked = this.props.checked;
		var other = _.omit(this.props, 'checked');
		var Class = checked ? 'Checked' : 'UnChecked';
		return (
			React.DOM.div(_.extend({}, other, {className: Class}))
		);
	}
});

React.render(
	<CheckBox checked={true} onClick={console.log.bind(console)}>
		Hello World!
	</CheckBox>
);


