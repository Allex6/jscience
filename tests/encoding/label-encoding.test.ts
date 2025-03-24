import { describe, it, expect } from 'vitest';
import { labelEncoding } from '../../src';

describe('labelEncoding', () => {
  const dataset = [{ color: 'red' }, { color: 'blue' }, { color: 'red' }];

  it('should correctly encode categorical columns', () => {
    const { rows, mappings } = labelEncoding(dataset, ['color']);
    expect(mappings.color).toEqual({ red: 0, blue: 1 });
    expect(rows[0]).toHaveProperty('color', 0);
    expect(rows[1]).toHaveProperty('color', 1);
  });

  it('should throw an error if the dataset is empty', () => {
    expect(() => labelEncoding([], ['color'])).toThrow();
  });
});
