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

  describe('#findByZip()', () => {
    it('for param "15300" should return array', () => {
      zip.findByZip(15300).then((result) => {
        expect(result).to.be.a('array');
      });
    });

    it('for param "1530" should return array of size 9', () => {
      zip.findByZip(1530).then((result) => {
        expect(result).to.have.length(9);
      });
    });

    it('for param "15300" should return array of size 1', () => {
      zip.findByZip(15300).then((result) => {
        expect(result[0].city).to.be.equal('Loznica');
      });
    });

    it('for empty param should reject', async () => {
      try {
        const result = await zip.findByZip();
        expect(result).to.be.undefined;
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });
});
