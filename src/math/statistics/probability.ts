import Decimal from 'decimal.js';
import { factorial } from '../combinatorics/factorial';
import { EULER } from '../utils/constants';

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

  const n_diff_k = new Decimal(n).minus(k).toNumber();
  const coefficient = new Decimal(factorial(n)).div(
    new Decimal(factorial(k)).mul(factorial(n_diff_k))
  );
  const q = new Decimal(1).minus(p).toNumber();

  return coefficient
    .mul(new Decimal(p).pow(k))
    .mul(new Decimal(q).pow(n_diff_k))
    .toNumber();
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

  const decimalLambda = new Decimal(lambda);
  const decimalK = new Decimal(k);
  const decimalE = new Decimal(EULER);
  const factorialK = factorial(k);

  return decimalE
    .pow(-decimalLambda.toNumber())
    .mul(decimalLambda.pow(decimalK.toNumber()))
    .div(factorialK)
    .toNumber();
}
