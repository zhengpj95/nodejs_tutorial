const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('connection open...');
});

const KittyScheme = new Schema({
	name: String,
	age: Number
});
const Kitten = mongoose.model('Kittens', KittyScheme);
// let silence = new Kitten({name: 'zzz1', age: 22});
// silence.save(function (error, value) {
//     if (error) {
//         console.log('save data error');
//         return 0;
//     }
//     console.log(value);
// });
Kitten.find({name: /1$/}, {name: 1, age: 1, _id: 0}, function (err, kittens) {
	if (err) return console.error(err);
	console.log(kittens);
});