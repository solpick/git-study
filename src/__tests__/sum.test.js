const sum = require('../sum');

test('더하기테스트', () => {
    expect(sum(2,6)).toBe(8);
    expect(sum(1+2, 5-3)).toBe(5);
});