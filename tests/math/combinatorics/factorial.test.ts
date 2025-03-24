import { describe, it, expect } from 'vitest';
import { factorial } from '../../../src/math/combinatorics/factorial';

describe('factorial', () => {
  it('should correctly calculate the factorial', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should return 1 for n equal to 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should throw an error if n is negative', () => {
    expect(() => factorial(-1)).toThrow('N cannot be negative!');
  });
});
