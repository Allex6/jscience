/**
 * Calculate the `mean` of an array of numbers.
 * @returns The mean of the input array.
 * @throws An error if the input array has no elements.
 */
export function mean(x: number[]): number {
  if (x.length === 0) {
    throw new Error('X must have at least one value!');
  }

  return x.reduce((sum, value) => sum + value, 0) / x.length;
}

/**
 * Calculate the `standard deviation` of an array of numbers.
 * @returns The standard deviation of the input array.
 * @throws An error if the input array has no elements.
 */
export function std(x: number[]): number {
  if (x.length === 0) {
    throw new Error('X must have at least one value!');
  }

  const _mean = mean(x);

  const variance =
    x.reduce((sum, value) => sum + Math.pow(value - _mean, 2), 0) / x.length;

  return Math.sqrt(variance);
}
