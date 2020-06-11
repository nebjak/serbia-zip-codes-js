const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/serbia_zip_codes.json'), 'utf8')
);

/**
 * Get all dataset
 * @returns {{city: string, zip_code: string}[]}
 */
function getAllSync() {
  return data;
}

/**
 * Search by city name
 * @param {string} city
 * @returns {{city: string, zip_code: string}[]}
 */
function findByCitySync(city) {
  return data.filter(function (d) {
    return d.city.match(RegExp(city, 'i'));
  });
}

/**
 * Search by zip code
 * @param {string | number} zip
 * @returns {{city: string, zip_code: string}[]}
 */
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
