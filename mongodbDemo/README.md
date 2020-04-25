# mongoose

## 1. installation

> npm install mongoose

## 2. import

> const mongoose = require('mongoose');

## 3. connection

> mongoose.connect(url, options);

url => 'mongodb://ip:port/dbname' or 'mongodb://username:password@host:port/dbname';
如果默认是本地27017端口的话，可以使用 'mongodb://localhost/dbname'

options is an object. Some important options for tuning Mongoose.

- `useNewUrlParser`
- `useUnifiedTopology`
- `useFindAndModify`

Connection Events

- `connecting`
- `connected`
- `open` Equivalent to `connected`
- `disconnecting`
- `disconnected`
- `close`
- `reconnected`
- `error`

```javascript
mongoose.connection.on(`error`, callback);
mongoose.connection.on(`open`, callback);
```

## 4. create a schema.

```javascript
const Schema = mongoose.Schema;
let StudentSchema = new Schema({
    name: String,
    age: Number,
    // ...
});
```

## 5. create a model.

```javascript
// students是集合名，如果不加后缀s，mongoose会自动补全
let studentModel = mongoose.model('students', StudentSchema);
```

## 6. SchemaTypes

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map

## 7. Model方法

## 8. document实例方法