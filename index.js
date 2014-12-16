var fs = require('fs');

var path = require('path');

var data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/serbia_zip_codes.json'), 'utf8'));

exports.getAll = function() {
  return data;
};

exports.findByCity = function(city) {
  return data.filter(function(d) {
    return d.city.match(RegExp(city, 'i'));
  });
};

exports.findByZip = function(zip) {
  return data.filter(function(d) {
    return d.zip_code.match(RegExp(zip, 'i'));
  });
};
