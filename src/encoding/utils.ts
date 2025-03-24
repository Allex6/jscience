/**
 * Get the unique values of a column in a dataset
 * @param rows The dataset
 * @param column The column to get the unique values for
 * @returns An array of unique values in the column
 */
export function getColumnValues(rows: any[], column: string): any[] {
  const values = new Set<any>();
  for (const row of rows) {
    if (row[column] !== undefined) {
      values.add(row[column]);
    }
  }
  return Array.from(values);
}
