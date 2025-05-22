export const testMatrix = (maxRows: number, maxCol: number) => {
  let matrix: number[][] = [];

  for (let i: number = 0; i < maxRows; i++) {
    matrix[i] = [];
    for (let j: number = 0; j < maxCol; j++) {
      matrix[i][j] = (i + 1) ** (j + 1);
    }
  }

  return matrix;
}

export const result = testMatrix(3, 2);
console.log(result);