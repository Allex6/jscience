import { describe, it, expect } from 'vitest';
import { EULER } from '../../../src';

describe('EULER', () => {
  it('should be approximately equal to 2.7182818284', () => {
    expect(EULER).toBeCloseTo(2.7182818284, 10);
  });
});
