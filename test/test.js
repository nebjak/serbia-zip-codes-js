var expect = require('chai').expect;
var zip = require('../index');

describe('serbia_zip_codes', function () {
  it('should respond to findByCitySync()', function () {
    expect(zip).to.respondTo('findByCitySync');
  });

  it('should respond to findByZipSync()', function () {
    expect(zip).to.respondTo('findByZipSync');
  });

  describe('#findByCitySync()', function () {
    it('for param "Loznica" should return array', function () {
      expect(zip.findByCitySync('Loznica')).to.be.a('array');
    });

    it('for param "Loznica" should return array of size 1', function () {
      expect(zip.findByCitySync('Loznica')).to.have.length(1);
    });

    it('for param "Loznica" should return expected value', function () {
      expect(zip.findByCitySync('Loznica')).to.eql([
        { city: 'Loznica', zip_code: '15300' },
      ]);
    });

    it('for param "Beograd" should have size 9', function () {
      expect(zip.findByCitySync('Beograd')).to.have.length(9);
    });

    it('should be case insensitive', function () {
      expect(zip.findByCitySync('loznica')).to.eql(
        zip.findByCitySync('LOZNICA')
      );
    });
  });

  describe('#findByZipSync()', function () {
    it('for param "15300" should return array', function () {
      expect(zip.findByZipSync('15300')).to.be.a('array');
    });

    it('for param "15300" should return array of size 1', function () {
      expect(zip.findByZipSync('15300')).to.have.length(1);
    });

    it('for param "1530" should return array of size 9', function () {
      expect(zip.findByZipSync('1530')).to.have.length(9);
    });
  });
});
