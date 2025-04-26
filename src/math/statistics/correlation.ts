import Decimal from 'decimal.js';

/**
 * Calculate the correlation coefficient between two arrays using the `Pearson correlation` formula.
 * @returns A number between -1 and 1, where:
 * - 1 indicates a total positive linear relationship between the two arrays.
 * - -1 indicates a total negative linear relationship between the two arrays.
 * - 0 indicates no linear relationship between the two arrays.
 * @throws An error if the input arrays have different lengths or if they have less than 2 elements.
 */
export function corr(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new Error('X and Y must have the same length!');
  }

  if (x.length < 2) {
    throw new Error('X and Y must have at least 2 elements!');
  }

  const n = x.length;
  let xTotal = new Decimal(0),
    yTotal = new Decimal(0),
    numerator = new Decimal(0),
    xSquareSum = new Decimal(0),
    ySquareSum = new Decimal(0);

  for (let i = 0; i < n; i++) {
    xTotal = xTotal.plus(x[i]);
    yTotal = yTotal.plus(y[i]);
  }

  const xMean = xTotal.div(n);
  const yMean = yTotal.div(n);

  for (let i = 0; i < n; i++) {
    const xDiff = x[i] - xMean.toNumber();
    const yDiff = y[i] - yMean.toNumber();

    numerator = numerator.plus(xDiff * yDiff);
    xSquareSum = xSquareSum.plus(xDiff * xDiff);
    ySquareSum = ySquareSum.plus(yDiff * yDiff);
  }

  const denominator = xSquareSum.sqrt().times(ySquareSum.sqrt());
  return numerator.div(denominator).toNumber();
}
