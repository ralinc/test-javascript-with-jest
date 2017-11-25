const sum = require('./sum')
const substract = require('./substract')

describe('aritmetic operations', () => {
  it('sums two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  });

  it('substracts two numbers', () => {
    expect(substract(2, 1)).toBe(1)
  });
});
