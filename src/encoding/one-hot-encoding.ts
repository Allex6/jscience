import { getColumnValues } from './utils';

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
  dropFirst = true
): { rows: any[]; columns: string[] } {
  if (rows.length === 0) {
    throw new Error('The input dataset is empty');
  }

  const newColumns: string[] = [];
  const columnMapping = new Map<string, { column: string; value: any }>();

  // Creates new columns based on the unique values in the original columns
  for (const column of columns) {
    const values = getColumnValues(rows, column);
    if (dropFirst) {
      values.shift();
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
