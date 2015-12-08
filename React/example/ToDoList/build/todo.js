'use strict';

var ToDoList = React.createClass({
	displayName: 'ToDoList',

	render: function render() {
		var createItem = function createItem(item) {
			return React.createElement(
				'li',
				{ id: item.id },
				item.text
			);
		};
		return React.createElement(
			'ul',
			null,
			this.props.items.map(createItem)
		);
	}
});

var ToDoApp = React.createClass({
	displayName: 'ToDoApp',

	getInitialState: function getInitialState() {
		return { items: [], text: '' };
	},
	onChange: function onChange(e) {
		this.setState({ text: e.target.value });
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var nextItem = this.state.items.concat({ text: this.state.text, id: Date.now() });
		var nextText = '';
		this.setState({ items: nextItem, text: nextText });
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				null,
				'ToDo'
			),
			React.createElement(ToDoList, { items: this.state.items }),
			React.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				React.createElement('input', { onChange: this.onChange, value: this.state.text }),
				React.createElement(
					'button',
					null,
					'Add #' + this.state.items.length + 1
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(ToDoApp, null), document.getElementById('todo'));