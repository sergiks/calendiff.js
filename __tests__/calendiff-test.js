jest.unmock('../calendiff'); // unmock to use the actual implementation of calendiff

describe('calediff', () => {
  it('gets a 1 second diff', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-01-01T00:00:02'),
    	new Date('2016-01-01T00:00:03')
    )).toEqual({"years":0,"months":0,"days":0,"hours":0,"minutes":0,"seconds":1});
  });

  it('gets a 1 year without 1 second diff', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-01-01T00:00:02'),
    	new Date('2017-01-01T00:00:01')
    )).toEqual({"years":0,"months":11,"days":30,"hours":23,"minutes":59,"seconds":59});
  });

  it('gets a 1 month diff on a leap year', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-02-15T15:45:00'),
    	new Date('2016-03-15T15:45:00')
    )).toEqual({"years":0,"months":1,"days":0,"hours":0,"minutes":0,"seconds":0});
  });

  it('gets a 1 month diff on a non-leap year', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2017-02-15T15:45:00'),
    	new Date('2017-03-15T15:45:00')
    )).toEqual({"years":0,"months":1,"days":0,"hours":0,"minutes":0,"seconds":0});
  });

  it('gets a worst case diff', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-02-15T15:45:00'),
    	new Date('2017-01-14T14:44:59')
    )).toEqual({"years":0,"months":10,"days":29,"hours":22,"minutes":59,"seconds":59});
  });

  it('gets a negative diff', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-10-15T23:45:01'),
    	new Date('2016-10-15T23:45:00')
    )).toEqual({"years":0,"months":0,"days":0,"hours":0,"minutes":0,"seconds":-1});
  });

  it('throws on bad input', () => {
    const calendiff = require('../calendiff');
    var bad = function(){
		calendiff(
	    	'bad date here',
	    	new Date('2016-10-15T23:45:00')
	    );
    };
    
    expect( bad).toThrow();
  });
  
  it('accepts text input', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	'2016-10-15T23:45:01',
    	'2016-09-15T23:45:00'
    )).toEqual({"years":0,"months":-1,"days":0,"hours":0,"minutes":0,"seconds":-1});
  });
  
  it('shift two months back from a 31-day-month', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-07-30T09:00:00'),
    	new Date('2018-12-01T12:00:00')
    )).toEqual({"years":2,"months":4,"days":1,"hours":3,"minutes":0,"seconds":0});
  });


});