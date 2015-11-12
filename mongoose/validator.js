var mongoose = require('mongoose');

var toySchema = new mongoose.Schema({
	color: String,
	name: String
});

var Toy = mongoose.model('Toy', toySchema);

Toy.schema.path('color').validate(function (value) {
	return /blue|green|white/i.test(value);
}, 'Invalid color');

var toy = new Toy({color: 'grease'});

toy.save(function (err) {
	console.log('message:', err.errors.color.message);
	console.log('String():', String(err.errors.color));
	console.log('type:', err.errors.color.type);
	console.log('path:', err.errors.color.path);
	console.log('value:', err.errors.color.value);
	console.log('name:', err.name);
	console.log('err.message:', err.message);
	console.log(toy.errors.color.message === err.errors.color.message); // true
});

// color undefined
// console.log(toy.errors.color.message);

