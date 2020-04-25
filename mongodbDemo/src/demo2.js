require('./tools/mongodb_conn');
const Student = require('./models/student');
const globalFunc = require('./tools/globalFunc');

Student.find({name: /11$/}, 'name age -_id', globalFunc.callback);

/**
 * 统计集合中文档个数
 * countDocuments(condition, callback)  可以传条件
 * estimatedDocumentCount(callback)     不需要条件的时候，这个效率更好
 */
Student.countDocuments({}, globalFunc.callback);
Student.estimatedDocumentCount(globalFunc.callback);