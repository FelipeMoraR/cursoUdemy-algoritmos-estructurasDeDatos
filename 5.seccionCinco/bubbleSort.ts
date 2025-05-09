export const arr: Array<number> = [1,5,4,8,9,10,1,2,-1]

export const bubbleSort: (array: Array<number>) => Array<number> = (array) => {
    const size: number = array.length;
    let round: number = 0;
    let arrayOrdered: boolean = false;

    while(!arrayOrdered) {
        arrayOrdered = true;

        for(let i = 0; i < size - round - 1; i++) {
            if(array[i] > array[i + 1]) {
                const aux: number = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;

                arrayOrdered = false;
            }
           
        }
        
    }

    return array;
}

bubbleSort(arr);
