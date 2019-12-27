/* eslint-env jest */
import truncate from './truncate';

describe('truncate', () => {
  test('should return correct truncated string', () => {
    expect(truncate(33)).toMatch('33');
  });

  test('should return correct truncated string', () => {
    expect(truncate(99)).toMatch('99');
  });

  test('should return correct truncated string', () => {
    expect(truncate(100)).toMatch('99+');
  });
});
