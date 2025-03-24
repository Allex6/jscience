import { describe, it, expect } from 'vitest';
import { oneHotEncoding } from '../../src';

describe('oneHotEncoding', () => {
  const dataset = [
    { color: 'red', shape: 'circle' },
    { color: 'blue', shape: 'square' },
    { color: 'red', shape: 'triangle' },
  ];

  it('should correctly encode categorical columns', () => {
    const { rows, columns } = oneHotEncoding(dataset, ['color'], false);
    expect(columns).toContain('color_red');
    expect(columns).toContain('color_blue');
    expect(rows[0]).toHaveProperty('color_red', 1);
    expect(rows[0]).toHaveProperty('color_blue', 0);
    expect(rows[1]).toHaveProperty('color_blue', 1);
    expect(rows[1]).toHaveProperty('color_red', 0);
  });

  it('should throw an error if the dataset is empty', () => {
    expect(() => oneHotEncoding([], ['color'])).toThrow();
  });
});
