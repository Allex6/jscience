import { describe, it, expect } from 'vitest';
import { getZValue } from '../../../src/math/utils/z-table';

describe('getZValue', () => {
  it('should return 1 for z_score greater than 3.9', () => {
    expect(getZValue(4)).toBe(1);
  });

  it('should return 0 for z_score less than -3.9', () => {
    expect(getZValue(-4)).toBe(0);
  });

  it('should return the correct value for positive z_score', () => {
    expect(getZValue(0.53)).toBeCloseTo(0.7019, 4);
  });

  it('should return the correct value for negative z_score', () => {
    expect(getZValue(-0.53)).toBeCloseTo(0.2981, 4);
  });

  it('should return 0.5 for values not found in the table', () => {
    expect(getZValue(0.001)).toBe(0.5);
  });
});
