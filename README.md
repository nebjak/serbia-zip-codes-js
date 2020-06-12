# Serbia zip codes

Easy access to Serbia zip codes. You can search zip code by city, or city by zip code.

[![Build Status][travis-image]][travis-url]

## Installation

```
npm install serbia-zip-codes
```

## Usage

```javascript
const SerbiaZipCodes = require('serbia-zip-codes');
```

### Search city by city:

**Synchronous:**

```javascript
const result = SerbiaZipCodes.findByCitySync('loznica');
console.log(result);
// [ { city: 'Loznica', zip_code: '15300' } ]

console.log(result[0].zip_code);
// 15300
```

**With promises**

```javascript
SerbiaZipCodes.findByCity('Novi Sad')
  .then((result) => {
    console.log(result);
    console.log(result[0].zip_code);
  })
  .catch((error) => {
    console.log(error.message);
  });

// [ { city: 'Novi Sad', zip_code: '21000' } ]
// 21000
```

### Search city by zip code:

**Synchronous:**

```javascript
const result = SerbiaZipCodes.findByZipSync('15300');
console.log(result);
// [ { city: 'Loznica', zip_code: '15300' } ]

console.log(result[0].city);
// Loznica
```

**With promises**

```javascript
SerbiaZipCodes.findByZip('21000')
  .then((result) => {
    console.log(result);
    console.log(result[0].city);
  })
  .catch((error) => {
    console.error(error.message);
  });
// [ { city: 'Novi Sad', zip_code: '21000' } ]
// Novi Sad
```

### Multiple results example:

**Synchronous:**

```javascript
const result = SerbiaZipCodes.findByCitySync('beograd');
console.log(result);

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

**With promises**

```javascript
SerbiaZipCodes.findByZip('214')
  .then((result) => {
    console.table(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

┌─────────┬─────────────────────┬──────────┐
│ (index) │        city         │ zip_code │
├─────────┼─────────────────────┼──────────┤
│    0    │      'Banjani'      │ '14214'  │
│    1    │     'Debeljača'     │ '15214'  │
│    2    │      'Kulina'       │ '18214'  │
│    3    │      'Rgotina'      │ '19214'  │
│    4    │       'Sirig'       │ '21214'  │
│    5    │   'Bačka Palanka'   │ '21400'  │
│    6    │       'Futog'       │ '21410'  │
│    7    │       'Begeč'       │ '21411'  │
│    8    │      'Gložan'       │ '21412'  │
│    9    │     'Čelarevo'      │ '21413'  │
│   10    │        'Bač'        │ '21420'  │
│   11    │    'Karađorđevo'    │ '21421'  │
│   12    │     'Mladenovo'     │ '21422'  │
│   13    │      'Obrovac'      │ '21423'  │
│   14    │    'Tovariševo'     │ '21424'  │
│   15    │      'Selenča'      │ '21425'  │
│   16    │      'Vajska'       │ '21426'  │
│   17    │      'Bodjani'      │ '21427'  │
│   18    │      'Plavna'       │ '21428'  │
│   19    │  'Bačko Novo Selo'  │ '21429'  │
│   20    │   'Nova Gajdobra'   │ '21431'  │
│   21    │     'Gajdobra'      │ '21432'  │
│   22    │      'Silbaš'       │ '21433'  │
│   23    │      'Parage'       │ '21434'  │
│   24    │       'Vrbas'       │ '21460'  │
│   25    │ 'Bačko Dobro Polje' │ '21465'  │
│   26    │      'Kucura'       │ '21466'  │
│   27    │    'Savino Selo'    │ '21467'  │
│   28    │     'Despotovo'     │ '21468'  │
│   29    │      'Pivnice'      │ '21469'  │
│   30    │  'Bački Petrovac'   │ '21470'  │
│   31    │    'Ravno Selo'     │ '21471'  │
│   32    │      'Kulpin'       │ '21472'  │
│   33    │      'Maglić'       │ '21473'  │
│   34    │     'Srbobran'      │ '21480'  │
│   35    │       'Torda'       │ '23214'  │
│   36    │     'Tavankut'      │ '24214'  │
│   37    │  'Gornja Dobrinja'  │ '31214'  │
│   38    │  'Veliko Krčmare'   │ '34214'  │
│   39    │       'Vrba'        │ '36214'  │
│   40    │      'Pojate'       │ '37214'  │
└─────────┴─────────────────────┴──────────┘
```

## Versions

### 1.0.0 - Sync and Promises

- sync functions `findByCitySync`, `findByZipSync`, `getAll`
- promise functions `findByCity` and `findByZip`

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

[travis-image]: https://travis-ci.org/nebjak/serbia-zip-codes-js.svg
[travis-url]: https://travis-ci.org/nebjak/serbia-zip-codes-js
