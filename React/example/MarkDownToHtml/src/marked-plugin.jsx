var MarkdownEditor = React.createClass({
	getInitialState: function () {
		return {value: 'Please input markdown.'}
	},
	handleChange: function () {
		this.setState({value: this.refs.textarea.value});
	},
	rawMarkup: function () {
		return {__html: marked(this.state.value, {sanitize: true})}
	},
	render: function () {
		return (
			<div>
				<h3>
					Input
				</h3>
				<textarea 
					onChange={this.handleChange}
					ref="textarea"
					defaultValue={this.state.value}
				/>
				<h3>
					Output
				</h3>
				<div className="content" dangerouslySetInnerHTML={this.rawMarkup()}>
				</div>
			</div>
		) 
	}
});

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));
