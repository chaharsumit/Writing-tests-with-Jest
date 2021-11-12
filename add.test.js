const add = require("./add");

test('adds 1 + 2 to equal 3', () => {
  expect(add(1,2)).toBe(3);
});

test('adds 1 + 3 to equal 3', () => {
  expect(add(1,3)).toBe(4);
});

test('adds 29 + 2 to equal 3', () => {
  expect(add(29,2)).toBe(31);
});

test('adds 10 + 12 to equal 3', () => {
  expect(add(10,12)).toBe(22);
});