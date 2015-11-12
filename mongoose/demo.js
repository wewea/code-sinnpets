var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

var PersonSchema = new mongoose.Schema({
	name: String
});

PersonSchema.methods.speak = function () {
	console.log('my name is:', this.name);
}

var PersonModel = db.model('Person', PersonSchema);
db.on('error', console.error.bind(console, '连接错误console:'));
db.once('open', function () {
	console.log('openned');

	var personEntity = new PersonModel({name: 'xxx'});
	personEntity.save();
	personEntity.speak();

	PersonModel.find(function (err, persons) {
		console.log(err);
		if (!err) {
			persons.forEach(function (person) {
				person.speak();
			});
		}
		db.close();
	});
});
