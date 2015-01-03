var expect = require('chai').expect
var zip = require('../index')

describe('serbia_zip_codes', function() {
  it('should respond to findByCity()', function() {
    expect(zip).to.respondTo('findByCity')
  })

  it('should respond to findByZip()', function() {
    expect(zip).to.respondTo('findByZip')
  })

  describe('#findByCity()', function() {
    it('for param "Loznica" should return array', function() {
      expect(zip.findByCity('Loznica')).to.be.a('array')
    })

    it('for param "Loznica" should return array of size 1', function() {
      expect(zip.findByCity('Loznica')).to.have.length(1)
    })

    it('for param "Loznica" should return expected value', function() {
      expect(zip.findByCity('Loznica')).to.eql([ { city: 'Loznica', zip_code: '15300' } ])
    })

    it('for param "Beograd" should have size 9', function() {
      expect(zip.findByCity('Beograd')).to.have.length(9)
    })

    it('should be case insensitive', function() {
      expect(zip.findByCity('loznica')).to.eql(zip.findByCity('LOZNICA'))
    })
  })

  describe('#findByZip()', function() {
    it('for param "15300" should return array', function() {
      expect(zip.findByZip("15300")).to.be.a("array")
    })

    it('for param "15300" should return array of size 1', function() {
      expect(zip.findByZip("15300")).to.have.length(1)
    })

    it('for param "1530" should return array of size 9', function() {
      expect(zip.findByZip("1530")).to.have.length(9)
    })
  })
})
