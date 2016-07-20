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
		};
		
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
		
		out.days += dateOut.getDate() - dateIn.getDate();
		if( out.days < 0) {
			out.days += new Date( dateOut.getFullYear(), dateOut.getMonth(), 0).getDate();
			out.months--;
		}
		
		out.months += dateOut.getMonth() - dateIn.getMonth();
		if( out.months < 0) {
			out.months += 12;
			out.years--;
		}
		
		out.years += dateOut.getFullYear() - dateIn.getFullYear();
		
		return out;
	}
})(this);
