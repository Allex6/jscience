import { describe, it, expect } from 'vitest';
import { corr } from '../../../src/math/statistics/correlation';

describe('corr', () => {
  it('should correctly calculate the correlation coefficient', () => {
    expect(corr([1, 2, 3], [4, 5, 6])).toBeCloseTo(1, 4);
  });

  it('should throw an error if the arrays have different lengths', () => {
    expect(() => corr([1, 2], [3])).toThrow(
      'X and Y must have the same length!'
    );
  });

  it('should throw an error if the arrays have less than 2 elements', () => {
    expect(() => corr([1], [2])).toThrow(
      'X and Y must have at least 2 elements!'
    );
  });
});
