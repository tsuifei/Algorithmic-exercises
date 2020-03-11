const sum = require('./sum');

describe('測試sum', function() {
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('add 42 + 24 to equal 66', () => {
    expect(sum(42, 24)).toBe(66);
  });
});
