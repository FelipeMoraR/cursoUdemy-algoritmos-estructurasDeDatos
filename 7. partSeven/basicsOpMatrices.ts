
export const validateMatrix: (matrix: number[][]) => boolean = (matrix) => {
  if(matrix.length === 0) return false;

  for (let i: number = 0; i < matrix.length; i++){
    if(i === matrix.length - 1) return true;
    if(matrix[i].length !== matrix[i + 1].length) return false;
  }
    
  return true
}

export const basicsOpMatrix: (matrixA: number[][], matrixB: number[][], typeOp: string) => number[][] | boolean = (matrixA, matrixB, typeOp) => {
  const avaibleOp: Array<string> = ['add', 'sub'];
  const result: string | undefined = avaibleOp.find((op) => op === typeOp);

  if(!result) {
    console.log('Type operation not avaible');
    return false;
  }

  if(!validateMatrix(matrixA) || !validateMatrix(matrixB)) {
    console.log('Matrices are not compatible, diff cols');
    return false;
  }

  if(matrixA.length !== matrixB.length) {
    console.log('Matrices are not compatible, diff rows');
    return false;
  }

  const finalSum: number[][] = [];
  
  matrixA.forEach((arr, indexArr) => {
    const newRow: Array<number> = [];

    arr.forEach((el, indexEl) => {
      const newResult: number = result === 'add' ? el + matrixB[indexArr][indexEl] : el - matrixB[indexArr][indexEl];
      newRow.push(newResult);
    });
    finalSum.push(newRow);
  });

  return finalSum
}

export const matrixA: number[][] = [[4, 2, 7], [5, 6, 9]];
export const matrixB: number[][] = [[5, 6, 3], [7, 8, 4]];
export const result: number[][] | boolean = basicsOpMatrix(matrixA, matrixB, 'sub');
console.log(result);


// ANCHOR Corrections

type Operation = 'add' | 'sub';

const validateMatrix2: (matrix: number[][]) => boolean = (matrix) => {
  if(matrix.length === 0) return false;

  const columnCount: number = matrix[0].length;
  
  return matrix.every(arr => arr.length === columnCount);
}

const basicsOpMatrix2: (matrixA: number[][], matrixB: number[][], typeOp: Operation) => number[][] | boolean = (matrixA, matrixB, typeOp) => {
  const availableOp: Array<string> = ['add', 'sub'];
  const result: string | undefined = availableOp.find((op) => op === typeOp);

  if(!result) {
    console.log('Type operation not availableOp');
    return false;
  }

  if(!validateMatrix2(matrixA) || !validateMatrix2(matrixB)) {
    console.log('Matrices are not compatible, diff cols');
    return false;
  }

  if(matrixA.length !== matrixB.length) {
    console.log('Matrices are not compatible, diff rows');
    return false;
  }

  const finalSum: number[][] = [];
  
  matrixA.forEach((arr, indexArr) => {
    const newRow: Array<number> = [];

    arr.forEach((el, indexEl) => {
      const newResult: number = result === 'add' ? el + matrixB[indexArr][indexEl] : el - matrixB[indexArr][indexEl];
      newRow.push(newResult);
    });
    finalSum.push(newRow);
  });

  return finalSum
}

const matrixA2: number[][] = [[4, 2, 7], [5, 6, 9]];
const matrixB2: number[][] = [[5, 6, 3], [7, 8, 4]];
const result2: number[][] | boolean = basicsOpMatrix2(matrixA2, matrixB2, 'add');
console.log(result2);


