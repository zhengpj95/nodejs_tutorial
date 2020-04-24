const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = mongoose.connection;

mongoose.connect('mongodb://localhost/tests', {useNewUrlParser: true, useUnifiedTopology: true});

connection.on('error', () => {
	console.log(`connection error...`)
});
connection.once('open', () => {
	console.log(`connection open...`);
});

// create a schema
let StudentSchema = new Schema({
	name: String,
	age: Number,
	gender: String,
	address: String
});

// create a model
let StudentModel = mongoose.model('students', StudentSchema);


// StudentModel.create({name: 'zpj11', age: 43, gender: 'male', address: 'guangzhou'}, callback);
StudentModel.find({name: /11$/}, 'name age', callback);
StudentModel.countDocuments({gender: 'male'}, callback);

function callback(error, value) {
	if (error) {
		console.log(`error --- `, error);
		return;
	}
	console.log(value);
}