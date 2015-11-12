var Eventproxy = require('eventproxy');
var cheerio = require('cheerio');
var superagent = require('superagent');
var url = require('url');

var targetUrl = 'https://cnodejs.org/';

superagent.get(targetUrl)
	.end(function (err, res) {
		if (err) {
			return console.log(err);
		}

		var topicUrl = [];
		var $ = cheerio.load(res.text);

		$('#topic_list .topic_title').each(function (idx, element) {
			var $element = $(element);

			var href = url.resolve(targetUrl, $element.attr('href'));

			topicUrl.push(href);
		});

		console.log(topicUrl);

		var ep = new Eventproxy();
		ep.after('topic_html', topicUrl.length, function (topics) {
		topics = 	topics.map(function (topic) {
				var topicUrl = topic[0];
				var topicHtml = topic[1];

				var $ = cheerio.load(topicHtml);
				return {
					title: $('.topic_full_title').text().trim(),
					href: topicUrl,
					comment1: $('.reply_content').eq(0).text().trim()
				}
			});

			console.log('final:');
			console.log(topics);
			console.log('length:', topics.length);
		});

		topicUrl.forEach(function (url) {
			superagent.get(url)
				.end(function (err, res) {
					if (err) return console.error(err);

					console.log('fetch ' + url + ' success');
					ep.emit('topic_html', [url, res.text]);
				});
		});
});

