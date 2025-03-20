/**
 * Calculate the correlation coefficient between two arrays using the Pearson correlation coefficient formula.
 * @returns A number between -1 and 1, where:
 * - 1 indicates a total positive linear relationship between the two arrays.
 * - -1 indicates a total negative linear relationship between the two arrays.
 * - 0 indicates no linear relationship between the two arrays.
 */
export function corr(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new Error('X and Y must have the same length!');
  }

  if (x.length < 2) {
    throw new Error('X and Y must have at least 2 elements!');
  }

  const n = x.length;
  let xTotal = 0,
    yTotal = 0,
    numerator = 0,
    xSquareSum = 0,
    ySquareSum = 0;

  for (let i = 0; i < n; i++) {
    xTotal += x[i];
    yTotal += y[i];
  }

  const xMean = xTotal / n;
  const yMean = yTotal / n;

  for (let i = 0; i < n; i++) {
    const xDiff = x[i] - xMean;
    const yDiff = y[i] - yMean;

    numerator += xDiff * yDiff;
    xSquareSum += xDiff * xDiff;
    ySquareSum += yDiff * yDiff;
  }

  const denominator = Math.sqrt(xSquareSum * ySquareSum);
  return numerator / denominator;
}
