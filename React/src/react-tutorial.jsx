var data = [
	{author: "Isax", text: "Fuck !!!"},
	{author: "Neo", text: "Shit !!!"}
];

// 负责评论列表的更新
var CommentBox = React.createClass({
	loadCommentFromServer: function () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function (data) {
				this.setState({data: data});
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit: function (comment) {
		var comments = this.state.data;
		newComment = comments.concat([comment]);
		this.setSate({data: newComment});
		$.ajax({
			url: this.props.url,
			dataType: json,
			type: 'POST',
			data: comment,
			success: function (data) {
				this.setState({data: data});
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function () {
		return {data: []};
	},
	componentDidMount: function () {
		this.loadCommentFromServer();
		setInterval(this.loadCommentFromServer, this.props.pollInterval);
	},
	render: function () {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		);
	}
});

// 只负责从CommentBox获取数据显示
var CommentList = React.createClass({
	render: function () {
		var commentNodes = this.props.data.map(function (comment) {
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();

		var author = this.ref.author.value.trim();
		var text = this.ref.text.value.trim();
		if (!text || !author) {
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.ref.author.value = '';
		this.ref.text.value = '';
		return;
	},
	render: function () {
		return (
			<div className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author"/>
				<input type="text" placeholder="Some thing..." ref="text"/>
			</div>
		)
	}
});

var Comment = React.createClass({
	rawMarkup: function () {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return {__html, rawMarkup};
	},
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()}/> 
			</div>
		)
	}
});

ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={2000}/>,
	document.getElementById('content')
);

