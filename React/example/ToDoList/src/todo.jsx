var ToDoList = React.createClass({
	render: function () {
		var createItem = function (item) {
			return <li id={item.id}>{item.text}</li>
		}
		return <ul>{this.props.items.map(createItem)}</ul>
	}
});

var ToDoApp = React.createClass({
	getInitialState: function () {
		return {items: [], text:''};
	},
	onChange: function (e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function (e) {
		e.preventDefault();
		var nextItem = this.state.items.concat({text: this.state.text, id: Date.now()});
		var nextText = '';
		this.setState({items: nextItem, text: nextText});
	},
	render: function () {
		return(
			<div>
				<h3>ToDo</h3>
				<ToDoList items={this.state.items} />
					<form onSubmit={this.handleSubmit}>
						<input onChange={this.onChange} value={this.state.text} />
						<button>{'Add #' + this.state.items.length + 1}</button>
					</form>
			</div>
		);
	}
});

ReactDOM.render(<ToDoApp />, document.getElementById('todo'));
