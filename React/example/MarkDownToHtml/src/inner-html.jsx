var InnerHtml = React.createClass({
	createMarkup: function () {
		// return {__html: 'First &middot; Second'};
		// if return without '__html'
		return 'First &middot; Second';
	},
	render: function () {
		return (
			<div dangerouslySetInnerHTML={this.createMarkup()}></div>
		);
	}
});

ReactDOM.render(<InnerHtml />, document.getElementById('root'));
