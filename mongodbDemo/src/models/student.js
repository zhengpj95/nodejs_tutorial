const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
let StudentSchema = new Schema({
	name: String,
	age: Number,
	gender: String,
	address: String
});

// create a model
let StudentModel = mongoose.model('students', StudentSchema);

// export model
module.exports = StudentModel;