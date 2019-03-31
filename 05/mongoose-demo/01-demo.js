const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String, age: Number });

for (var i = 0; i < 20; i++) {
	var kitty = new Cat({ name: 'cat'+(i+1), age: (18+i) });
	kitty.save().then(() => console.log('meow'));
}

