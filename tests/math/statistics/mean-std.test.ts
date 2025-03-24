import { describe, it, expect } from 'vitest';
import { mean, std } from '../../../src/math/statistics/mean-std';

describe('mean', () => {
  it('should correctly calculate the mean', () => {
    expect(mean([1, 2, 3])).toBe(2);
  });

  it('should throw an error if the array is empty', () => {
    expect(() => mean([])).toThrow('X must have at least one value!');
  });
});

describe('std', () => {
  it('should correctly calculate the standard deviation', () => {
    expect(std([1, 2, 3])).toBeCloseTo(0.8165, 4);
  });

  it('should throw an error if the array is empty', () => {
    expect(() => std([])).toThrow('X must have at least one value!');
  });
});
