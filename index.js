const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/serbia_zip_codes.json'), 'utf8')
);

function getAllSync() {
  return data;
}

function findByCitySync(city) {
  return data.filter(function (d) {
    return d.city.match(RegExp(city, 'i'));
  });
}

function findByZipSync(zip) {
  return data.filter(function (d) {
    return d.zip_code.match(RegExp(zip, 'i'));
  });
}

module.exports = {
  getAllSync: getAllSync,
  findByCitySync: findByCitySync,
  findByZipSync: findByZipSync,
};
