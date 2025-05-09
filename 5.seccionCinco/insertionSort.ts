//My solution with a while 
export const arr: Array<number> = [1, 5, 4, 3, -1];

export const insertionSort: (array: Array<number>) => Array<number> = (array) => {
    const size: number = array.length;
    
    for(let i: number = 1; i < size; i++) {
        let prevNumIter: number = i - 1;
        let actNumIter: number = i;

        while(array[actNumIter] < array[prevNumIter] && prevNumIter >= 0) {
            console.log(i);
            const aux: number = array[actNumIter];
            array[actNumIter] = array[prevNumIter];
            array[prevNumIter] = aux;

            actNumIter = prevNumIter;
            prevNumIter = prevNumIter - 1;
        }
    }
    
    return array;
}

export const result: Array<number> = insertionSort(arr);
console.log('Array ordered: ', result);

//Course solution
export const arr2: Array<number> = [1, 5, 4, 3, -1];

export const insertionSort2: (array: Array<number>) => Array<number> = (array) => {
    
    for (let i: number = 1; i < array.length; i++) {
        let aux: number = array[i];
        let j;

        for (j = i - 1; j >= 0 && aux < array[j]; j--) {
            array[j + 1] = array[j];
            
        }

        array[j + 1] = aux;
        console.log(array, i)

    }
    return array;
}

export const result2: Array<number> = insertionSort2(arr2);
console.log('Array ordered: ', result);