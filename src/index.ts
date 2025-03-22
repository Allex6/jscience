import { EULER } from './utils/euler';

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
    throw new Error('N cannot be negative!');
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
    throw new Error('K cannot be greater than N!');
  }

  const n_diff_k = n - k;
  const coefficient = factorial(n) / (factorial(k) * factorial(n_diff_k));
  const q = 1 - p;

  return coefficient * Math.pow(p, k) * Math.pow(q, n_diff_k);
}

/**
 * Calculate the `Poisson probability` of a number of events occurring in a fixed interval of time
 * @param lambda The average number of events per interval
 * @param k The number of events to calculate the probability for
 * @returns An approximation of the Poisson probability of the input parameters
 * @throws An error if the number of events is negative.
 */
export function poisson(lambda: number, k: number): number {
  if (k < 0) {
    throw new Error('K cannot be negative!');
  }

  return (Math.pow(EULER, -lambda) * Math.pow(lambda, k)) / factorial(k);
}

/**
 * Encode categorical columns in a dataset using the `one-hot encoding` technique.
 * @param rows An array of objects representing the dataset
 * @param columns An array of column names to encode
 * @param dropLast A boolean indicating whether to drop the last column in the encoding **(useful for linear models to avoid multicollinearity)**
 * @returns An object containing the encoded dataset and the new column names
 * @throws An error if the input dataset is empty or if the input columns are not present in the dataset.
 */
export function oneHotEncoding(
  rows: any[],
  columns: string[],
  dropLast: boolean = false
): { rows: any[]; columns: string[] } {
  const columnValues = new Map<string, Set<any>>();

  // Collects all unique values for each column
  for (const row of rows) {
    for (const column of columns) {
      if (!columnValues.has(column)) {
        columnValues.set(column, new Set());
      }
      if (row[column] !== undefined) {
        columnValues.get(column)!.add(row[column]);
      }
    }
  }

  // Creates new columns for each unique value in each column
  const newColumns: string[] = [];
  const columnMapping = new Map<string, { column: string; value: any }>();

  for (const column of columns) {
    const values = Array.from(columnValues.get(column)!);
    if (dropLast) {
      values.pop();
    }
    for (const value of values) {
      const newColumnName = `${column}_${value}`;
      newColumns.push(newColumnName);
      columnMapping.set(newColumnName, { column, value });
    }
  }

  // Encodes the rows using the new columns
  const encodedRows = rows.map((row) => {
    for (const newColumn of newColumns) {
      const { column: originalColumn, value } = columnMapping.get(newColumn)!;
      if (row[originalColumn] !== undefined) {
        row[newColumn] = row[originalColumn] === value ? 1 : 0;
      } else {
        row[newColumn] = 0;
      }
    }
    return row;
  });

  return { rows: encodedRows, columns: newColumns };
}
