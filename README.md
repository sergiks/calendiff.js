Calendiff.js
========

Calendar difference between two dates

How a human would calculate the "distance" in her calendar:
February 14 to April 14 same year is exactly two months, no matter if its a leap year, cause the date is the same.
This is how calendiff calculates the distance between two given date objects.

Example
=====

```js
const calendiff = require('calendiff');

var diff = calendiff(
	new Date( '2016-07-19T12:59:59'),
	new Date( '2017-07-19T12:59:58')
);

/*
	{
		"years"   : 0,
		"months"  : 11,
		"days"    : 30,
		"hours"   : 23,
		"minutes" : 59,
		"seconds" : 59
	}
*/

```

Usage
====

Import the module or just include the `calendiff.js` file in your HTML.

It takes two parameters as the input. Each can be a `Date` object instance or a text string ([IETF-compliant RFC 2822 timestamps](http://tools.ietf.org/html/rfc2822#page-14) and also a [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)). Using strings is discouraged due to browser differences and inconsistencies. In case of a bad input `calendiff()` throws an error. 

License
====

Calendiff.js is licensed under the MIT License - see the [License](https://github.com/sergiks/calendiff.js/blob/master/LICENSE) file for details