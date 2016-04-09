## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install academic-year --save
```


## Initial

Set the first day of academic year, requires [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string in date part.


```js
var AcademicYear = require('academic-year');
var schoolAcademicYear = new AcademicYear('2016-09-01');
```

## Usage
**Academic year detail**
```js
console.log(schoolAcademicYear.current());
console.log(schoolAcademicYear.currentAbbr());
console.log(schoolAcademicYear.next());
console.log(schoolAcademicYear.nextAbbr());

// 2015
// 15
// 2016
// 16
```

**Academic year name**
```js
console.log('Name 1: ' + schoolAcademicYear.name());
console.log('Name 2: ' + schoolAcademicYear.name('/'));	
console.log('Name 3: ' + schoolAcademicYear.abbrName());
console.log('Name 4: ' + schoolAcademicYear.abbrName('*'));	

// Name 1: 2015-2016
// Name 2: 2015/2016
// Name 3: 2015-16
// Name 4: 2015*16
```




