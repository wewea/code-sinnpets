'use strict';

var InnerHtml = React.createClass({
	displayName: 'InnerHtml',

	createMarkup: function createMarkup() {
		// return {__html: 'First &middot; Second'};
		// if return without '__html'
		return 'First &middot; Second';
	},
	render: function render() {
		return React.createElement('div', { dangerouslySetInnerHTML: this.createMarkup() });
	}
});

ReactDOM.render(React.createElement(InnerHtml, null), document.getElementById('root'));