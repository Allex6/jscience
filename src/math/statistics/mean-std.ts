import Decimal from 'decimal.js';

/**
 * Calculate the `mean` of an array of numbers.
 * @returns The mean of the input array.
 * @throws An error if the input array has no elements.
 */
export function mean(x: number[]): number {
  if (x.length === 0) {
    throw new Error('X must have at least one value!');
  }

  return new Decimal(
    x.reduce((sum, value) => new Decimal(sum).plus(value).toNumber(), 0)
  )
    .div(x.length)
    .toNumber();
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

  const variance = new Decimal(
    x.reduce(
      (sum, value) => sum.plus(new Decimal(value).minus(_mean).pow(2)),
      new Decimal(0)
    )
  ).div(x.length);

  return variance.sqrt().toNumber();
}
