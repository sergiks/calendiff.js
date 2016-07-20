Calendiff.js
========

Calendar difference between two dates

A human way of estimating a calendar distance:

* February 14 to March 14 same year: exactly 2 months, no matter if its a leap year or not;
* May 5 to May 4: -1 day;
* April 1 2015 to the same date in 2017: 2 years sharp;
* January 1 2015 to December 31 2016: 1 year, 11 months and 30 days;
* 15:45:00 to 15:44:59 same day: -1 second. 


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