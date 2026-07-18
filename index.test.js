const add = require('./index.js');

describe('add function', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('should add positive and negative numbers', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('should add zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  test('should add decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  test('should add two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });
});
