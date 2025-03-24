import { mean, std } from './mean-std';

/**
 * Calculate the `z-score` of a number
 * @param x The number to calculate the z-score for
 * @param mean The mean of the data
 * @param std The standard deviation of the data
 * @returns The z-score of the input number
 */
export function zScore(x: number, mean: number, std: number): number {
  return (x - mean) / std;
}

/**
 * Standardize an array of numbers using the `z-score normalization` technique.
 * @returns An array of numbers with a mean of 0 and a standard deviation of 1.
 * @throws An error if the input array has less than 2 elements or if all elements are identical.
 */
export function standardize(x: number[]): number[] {
  if (x.length < 2) {
    throw new Error('X must have at least 2 values!');
  }

  const _mean = mean(x);
  const _std = std(x);

  if (_std === 0) {
    throw new Error('Standard deviation cannot be zero!');
  }

  return x.map((val) => zScore(val, _mean, _std));
}
