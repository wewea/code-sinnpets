var MyComponent = React.createClass({
	handleclick: function () {
		// getDOMNode获取DOM节点的引用, React中一般不操作DOM
		this.refs.myTextInput.getDOMNode().focus();
	},
	render: function () {
		return (
			<div>
				<input type="text" ref="myTextInput" />
				<input 
					type="button"
					value="Focus the text input"
					onClick={this.handleclick}
				/>
			</div>
		);
	}
});
