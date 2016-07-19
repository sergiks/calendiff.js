calendiff
========

Calendar difference between two dates

How a human would calculate the "distance" in her calendar:
February 14 to April 14 same year is exactly two months, no matter if its a leap year, cause the date is the same.

Example
=====

```js
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