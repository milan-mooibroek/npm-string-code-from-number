# String code from number generator

The string-code-from-number package is a tool to generate unique short strings from numbers.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install string code from number generator.

```bash
npm install string-code-from-number -s
```

## Usage

```javascript
const stringCodeFromNumber = require('string-code-from-number');
const stringGenerator = new stringCodeFromNumber('abcd');
const unqiueString = stringGenerator.generate(1) // a
```

if `new stringCodeFromNumber()` is empty it will be filled with : abcdefghijklmnopqrstuvwxyz0123456789

## Examples

```javascript
const stringCodeFromNumber = require('string-code-from-number');
const stringGenerator = new stringCodeFromNumber('abcd');

console.log(stringGenerator.generate(1)); //  a
console.log(stringGenerator.generate(4)); //  d
console.log(stringGenerator.generate(5)); //  aa
console.log(stringGenerator.generate(6)); //  ab
console.log(stringGenerator.generate(20)); //  dd
console.log(stringGenerator.generate(21)); //  aaa
console.log(stringGenerator.generate(83)); //  ddd
console.log(stringGenerator.generate(84)); //  aaaa
```


## License
[MIT](https://choosealicense.com/licenses/mit/)