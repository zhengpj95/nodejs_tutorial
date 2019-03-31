const mapArray = require('map-array');
const obj = {
  giorgio: 'Bianchi',
  gino: 'Rossi'
};
console.log(mapArray(obj, (key, value) => key + ' ' + value));

// ['giorgio Bianchi', 'gino Rossi']