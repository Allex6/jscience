import { getColumnValues } from './utils';

/**
 * Encode categorical columns in a dataset using the `label encoding` technique.
 * @param rows The dataset
 * @param columns The columns to encode
 * @returns An object containing the encoded dataset and the mappings used for encoding
 */
export function labelEncoding(
  rows: any[],
  columns: string[]
): { rows: any[]; mappings: Record<string, Record<any, number>> } {
  const mappings: Record<string, Record<any, number>> = {};

  for (const column of columns) {
    const values = getColumnValues(rows, column);
    mappings[column] = {};
    for (let i = 0; i < values.length; i++) {
      mappings[column][values[i]] = i;
    }
  }

  const encodedRows = rows.map((row) => {
    for (const column of columns) {
      if (row[column] !== undefined) {
        row[column] = mappings[column][row[column]];
      }
    }
    return row;
  });

  return { rows: encodedRows, mappings };
}
