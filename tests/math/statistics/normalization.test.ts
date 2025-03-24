import { describe, it, expect } from 'vitest';
import { minMax } from '../../../src/math/statistics/normalization';

describe('minMax', () => {
  it('should correctly normalize an array', () => {
    expect(minMax([1, 2, 3])).toEqual([0, 0.5, 1]);
  });

  it('should throw an error if the array has less than 2 elements', () => {
    expect(() => minMax([1])).toThrow('X must have at least 2 values!');
  });

  it('should throw an error if all elements are identical', () => {
    expect(() => minMax([2, 2, 2])).toThrow('All values in X are identical!');
  });
});
