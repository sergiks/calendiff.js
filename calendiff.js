"use strict";
(function(context) {
	if (typeof define === "function"  &&  define.amd) {
		define(function() {
			return calendiff;
		});
	} else if (typeof module === "object"  &&  module.exports) {
		module.exports = calendiff;
	} else {
		context.calendiff = calendiff;
	}


	/**
	 * Calendar difference between two dates
	 *
	 * It takes into account the number of days in a month,
	 * leap years, seconds and timezones.
	 *
	 * @param Date object dateIn start date
	 * @param Date object dateOut end date
	 *
	 * @return object with int properties 
	 * "years", "months", "days", "hours", "minutes" and "seconds"
	 *
	 * @author Sergei Sokolov <hello@sergeisokolov.com>
	 * Moscow, July 19, 2016
	 */
	function calendiff( dateIn, dateOut) {
		var out = {
			years		: 0
			,months		: 0
			,days		: 0
			,hours		: 0
			,minutes	: 0
			,seconds	: 0
		}
			,sign = 1
			,diff = 0
			,proto
			,monthsShift
			,prop
		;
		
		// check input
		proto = Object.prototype.toString.call(dateIn);
		if( proto !== '[object Date]') {
			dateIn = new Date( dateIn);
			if( isNaN( dateIn.getTime())) throw 'Incorrect "In" date format';
		}

		proto = Object.prototype.toString.call(dateOut);
		if( proto !== '[object Date]') {
			dateOut = new Date( dateOut);
			if( isNaN( dateOut.getTime())) throw 'Incorrect "Out" date format';
		}

		
		// check numeric difference
		diff = dateOut.getTime() - dateIn.getTime();
		
		if( diff === 0) {
			return out;
		} else if( diff < 0) {
			sign = -1;
			dateOut = [dateIn, dateIn = dateOut][0]; // swap the dates
		}


		// calculate human-readable difference
		out.seconds += dateOut.getSeconds() - dateIn.getSeconds();
		if( out.seconds < 0) {
			out.seconds += 60;
			out.minutes--;
		}
		
		out.minutes += dateOut.getMinutes() - dateIn.getMinutes();
		if( out.minutes < 0) {
			out.minutes += 60;
			out.hours--;
		}
		
		out.hours += dateOut.getHours() - dateIn.getHours();
		if( out.hours < 0) {
			out.hours += 24;
			out.days--;
		}
		
		// complex part: a month can have various number of days
		// when entering with a negative number of days, up to -31,
		// it might take up to two months shift back
		// should the preceding month only have 28, 29 or 30 days.
		out.days += dateOut.getDate() - dateIn.getDate();
		while( out.days < 0) {
			monthsShift = 0;
			out.days += new Date( dateOut.getFullYear(), dateOut.getMonth() - monthsShift, 0).getDate();
			monthsShift++;
			out.months--;
		}
		
		out.months += dateOut.getMonth() - dateIn.getMonth();
		if( out.months < 0) {
			out.months += 12;
			out.years--;
		}
		
		out.years += dateOut.getFullYear() - dateIn.getFullYear();
		
		// negative difference case
		if( sign < 0)
			for( prop in out)
				if( out[prop]) out[prop] *= -1; // avoid -0 values
		
		return out;
	}
})(this);
