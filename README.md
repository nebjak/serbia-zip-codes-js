# Serbia zip codes

Easy access to Serbia zip codes. You can search zip code by city, or city by zip code.


[![Build Status][travis-image]][travis-url]

## Installation


```
npm install serbia-zip-codes
```

## Usage

```javascript
SerbiaZipCodes = require("serbia-zip-codes")
```

Search city by city:
```javascript
result = SerbiaZipCodes.findByCity("loznica")
console.log(result)
//prints
//[ { city: 'Loznica', zip_code: '15300' } ]
console.log(result[0].zip_code)
//prints
//15300
```


Search city by zip code:
```javascript
result = SerbiaZipCodes.findByZip("15300")
console.log(result)
//prints
//[ { city: 'Loznica', zip_code: '15300' } ]
console.log(result[0].city)
//prints
//Loznica
```

Multiple results example:
```javascript
result = SerbiaZipCodes.findByCity("beograd")
console.log(result)
//prints
//[ { city: 'Beograd', zip_code: '11000' },
//  { city: 'Beograd Vozdovac', zip_code: '11010' },
//  { city: 'Beograd Čukarica', zip_code: '11030' },
//  { city: 'Beograd Zvezdara', zip_code: '11050' },
//  { city: 'Beograd Palilula', zip_code: '11060' },
//  { city: 'Novi Beograd', zip_code: '11070' },
//  { city: 'Beograd Zemun', zip_code: '11080' },
//  { city: 'Beograd Rakovica', zip_code: '11090' },
//  { city: 'Mali Beograd', zip_code: '24309' } ]
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

[travis-image]: https://travis-ci.org/nebjak/serbia-zip-codes-js.svg
[travis-url]: https://travis-ci.org/nebjak/serbia-zip-codes-js
