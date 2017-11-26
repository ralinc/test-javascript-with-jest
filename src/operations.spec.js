const sum = require('./sum')
const substract = require('./substract')

describe('aritmetic operations', () => {
  test('sums two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  });

  test('substracts two numbers', () => {
    expect(substract(2, 1)).toBe(1)
  });
});
