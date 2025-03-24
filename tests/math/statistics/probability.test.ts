import { describe, it, expect } from 'vitest';
import { binomial, poisson } from '../../../src/math/statistics/probability';

describe('binomial', () => {
  it('should correctly calculate the binomial probability', () => {
    expect(binomial(5, 2, 0.5)).toBeCloseTo(0.3125, 4);
  });

  it('should throw an error if k is greater than n', () => {
    expect(() => binomial(3, 5, 0.5)).toThrow('K cannot be greater than N!');
  });
});

describe('poisson', () => {
  it('should correctly calculate the Poisson probability', () => {
    expect(poisson(2, 3)).toBeCloseTo(0.1804, 4);
  });

  it('should throw an error if k is negative', () => {
    expect(() => poisson(2, -1)).toThrow('K cannot be negative!');
  });
});
