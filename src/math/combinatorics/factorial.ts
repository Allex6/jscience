import Decimal from 'decimal.js';

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

  let total = new Decimal(n);

  for (let i = n - 1; i > 0; i--) {
    total = total.mul(i);
  }

  return total.toNumber();
}
