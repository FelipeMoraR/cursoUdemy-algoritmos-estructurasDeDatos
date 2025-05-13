export const array: Array<number> = [6, 1, 5, 3, 4, 2, 7, 3, 1, -1];

export const customSort: (array: Array<number>) => Array<number> = (array) => {
    const size: number = array.length;
    let max: number = array[size - 1];
    let i: number = 1;
    let j: number = 1;

    while (i < size) { 
        if (max < array[i]) {
            const aux: number = array[i];
            array[i] = max;
            array[size - 1] = aux;

            max = aux;
        }

        while (array[j - 1] > array[j] && j >= 1) {
            const aux: number = array[j];
            array[j] = array[j - 1];
            array[j - 1] = aux;

            j--;
        }

        i++;
        j = i;
    }
    
    return array;
}

export const result: Array<number> = customSort(array);

console.log(result);