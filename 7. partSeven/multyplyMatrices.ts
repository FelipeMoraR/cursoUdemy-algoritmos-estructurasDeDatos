// my solution
export const validateCols: (matrix: number[][]) => boolean = (matrix) => {
  if(matrix.length === 0) return false;

  const numCol: number = matrix[0].length;

  return matrix.every(arr => arr.length === numCol);
}

export const canMultipy: (matrixA: number[][], matrixB: number[][]) => boolean = (matrixA, matrixB) => {
  if(!validateCols(matrixA) || !validateCols(matrixB)) {
    console.log('One/All matrix/ces are not accepted');
    return false
  }

  const rowMatrixA: number = matrixA[0].length;
  const colsMatrixB: number = matrixB.length;

  return rowMatrixA === colsMatrixB
}


export const multiplyMatrices: (matrixA: number[][], matrixB: number[][]) => number[][] | boolean = (matrixA, matrixB) => {
  if(!canMultipy(matrixA, matrixB)) {
    console.log('Matrices cant multiply each other.')
    return false;
  }
  const numColsMatrixB: number = matrixB[0].length;
  let finalResult: number[][] = [];

  matrixA.forEach(arr => {
    const newRow: Array<number> = [];

    for (let i: number = 0; i < numColsMatrixB; i++) {
      let valueToSave: number = 0;

      arr.forEach((el, indexEl) => valueToSave = valueToSave + (el * matrixB[indexEl][i]));

      newRow.push(valueToSave);
      valueToSave = 0;
    }
    finalResult.push(newRow);
  });

  return finalResult;
}

const matrixA = [
  [1, 2, 3, 4]
];

const matrixB = [
  [0, 1],
  [1, 0],
  [2, 1],
  [3, 2]
];


export const result: number[][] | boolean = multiplyMatrices(matrixA, matrixB);
console.log(result);
