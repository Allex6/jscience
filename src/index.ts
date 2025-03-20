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

  return x.map((curr) => (curr - min) / (max - min));
}

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

/**
 * Calculates the factorial of a number
 * @param n The number to calculate the factorial for
 * @returns The factorial of the input number
 * @throws An error if the input number is negative.
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error();
  }

  if (n <= 1) {
    return 1;
  }

  let total = n;

  for (let i = n - 1; i > 0; i--) {
    total *= i;
  }

  return total;
}

/**
 * Calculate the binomial probability of a number of successes in a fixed number of trials
 * @param n The number of trials
 * @param k The number of successful trials
 * @param p The probability of success on each trial
 * @returns The binomial probability of the input parameters
 * @throws An error if the number of successful trials is greater than the number of trials.
 */
export function binomial(n: number, k: number, p: number): number {
  if (k > n) {
    throw new Error();
  }

  const n_diff_k = n - k;
  const coefficient = factorial(n) / (factorial(k) * factorial(n_diff_k));
  const q = 1 - p;

  return coefficient * Math.pow(p, k) * Math.pow(q, n_diff_k);
}
