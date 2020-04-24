require('./tools/mongodb_conn');
const Student = require('./models/student');
const globalFunc = require('./tools/globalFunc');

Student.find({name: /11$/}, 'name age -_id', globalFunc.callback);
Student.countDocuments({}, globalFunc.callback);