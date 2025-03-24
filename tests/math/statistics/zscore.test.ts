import { describe, it, expect } from 'vitest';
import { zScore, standardize } from '../../../src/math/statistics/zscore';

describe('zScore', () => {
  it('should correctly calculate the z-score', () => {
    expect(zScore(10, 5, 2)).toBe(2.5);
  });
});

describe('standardize', () => {
  it('should correctly standardize an array', () => {
    const result = standardize([1, 2, 3]);
    expect(result[0]).toBeCloseTo(-1.22, 2);
    expect(result[1]).toBeCloseTo(0, 2);
    expect(result[2]).toBeCloseTo(1.22, 2);
  });

  it('should throw an error if the array has less than 2 elements', () => {
    expect(() => standardize([1])).toThrow('X must have at least 2 values!');
  });

  it('should throw an error if all elements are identical', () => {
    expect(() => standardize([2, 2, 2])).toThrow(
      'Standard deviation cannot be zero!'
    );
  });
});
