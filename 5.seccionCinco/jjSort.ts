export const array: Array<number> = [-1, 10, -10, 5, 2, 7];

export const customCourse: (array: Array<number>) => Array<number> = (array) => {
    const size: number = array.length;
    let aux: number | undefined;
    let lastElement: number = size - 1;

    for (let i: number = 0; i < size/2; i++) {
        let maxIndex: number = i;
        let minIndex: number = i;

        for (let j: number = i; j <= lastElement; j++) { 
            if(array[j] > array[maxIndex]) maxIndex = j;
            if(array[j] < array[minIndex]) minIndex = j;
        }

        aux = array[i];
        array[i] = array[minIndex];
        array[minIndex] = aux;

        if(maxIndex === i) maxIndex = minIndex;
        

        aux = array[lastElement];
        array[lastElement] = array[maxIndex];
        array[maxIndex] = aux;

        lastElement = lastElement - 1;
    }
    
    return array;
}

export const result: Array<number> = customCourse(array);
console.log(result);
