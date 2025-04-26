import Decimal from 'decimal.js';

/**
 * Normalize an array of numbers using the `min-max normalization` technique.
 * @returns An array of numbers between 0 and 1.
 * @throws An error if the input array has less than 2 elements or if all elements are identical.
 */
export function minMax(x: number[]): number[] {
  if (x.length < 2) {
    throw new Error('X must have at least 2 values!');
  }

  const min = Math.min(...x);
  const max = Math.max(...x);

  if (min === max) {
    throw new Error('All values in X are identical!');
  }

  return x.map((curr) => {
    const minDecimal = new Decimal(min);
    const maxDecimal = new Decimal(max);
    const currDecimal = new Decimal(curr);
    return currDecimal
      .minus(minDecimal)
      .div(maxDecimal.minus(minDecimal))
      .toNumber();
  });
}
