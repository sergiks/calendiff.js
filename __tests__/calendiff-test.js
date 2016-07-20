jest.unmock('../calendiff'); // unmock to use the actual implementation of calendiff

describe('calediff', () => {
  it('adds 1 + 2 to equal 3', () => {
    const calendiff = require('../calendiff');
    expect( calendiff(
    	new Date('2016-01-01T00:00:02'),
    	new Date('2016-01-01T00:00:03')
    )).toEqual({"years":0,"months":0,"days":0,"hours":0,"minutes":0,"seconds":1});
  });
});