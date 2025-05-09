//My solution with one for, this not more efficient, just i want do it like this.
export const arr: Array<number> = [1, 5, 6, -1, 3, 7, 8, -5, -2, 10, 2, 6, -3, -4];

export const selectionSort: (array: Array<number>) => Array<number> = (array) => {
    let isOrdered: boolean = false;
    let round: number = 0;
    let size: number = array.length;
    let indexSmaller: number = 0;
    let valueSmaller = array[0];

    while(!isOrdered) {
        isOrdered = true;

        for(let i = round + 1; i < size; i++) {
            if(array[i] > array[i + 1] && size - 1 !== i && isOrdered) isOrdered = false;

            if(array[round] > array[i]) {
                if(valueSmaller > array[i]) {
                    valueSmaller = array[i];
                    indexSmaller = i;
                }
            }

            if(size - 1 === i) {
                const aux: number = array[indexSmaller];
                array[indexSmaller] = array[round];
                array[round] = aux;
            }
        }

        round++;
        valueSmaller = array[round];
        indexSmaller = round;
    }

    return array;
}

export const result: Array<number> = selectionSort(arr);
console.log('Array ordered: ', result);

//My second solution with double for
const arr3: Array<number> = [1, 5, 6, -1, 3, 7, 8, -5, -2, 10, 2, 6, -3, -4, 4];

const selectionSort3: (array: Array<number>) => Array<number> = (array) => {
    
    const size: number = array.length;
    

    for(let i: number = 0; i < size; i++) {
        let indexSmaller: number = i; 

        for(let j = i + 1; j < size; j++){
            if(array[indexSmaller] > array[j]) {
                indexSmaller = j;
            }
        }
        
        const aux: number = array[indexSmaller];
        array[indexSmaller] = array[i];
        array[i] = aux;        
    }


    return array;
}

const result3: Array<number> = selectionSort3(arr3);
console.log('Array ordered: ', result3);

//IA solution
export const selectionSort2 = (array: number[]): number[] => {
    const size = array.length;

    for (let i = 0; i < size - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < size; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

export const arr2 = [1, 5, 6, -1, 3, 7, 8, -5, -2, 10, 2, 6, -3, -4];
export const result2 = selectionSort2(arr2);
console.log('Array ordered: ', result2);

