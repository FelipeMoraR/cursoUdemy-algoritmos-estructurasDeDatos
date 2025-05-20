export const decimals: Array<number> = [1.2, 1.21, 1.19]

export const chlg3: (array: Array<number>) => Record<string, number> = (array) => {
    let bigger: number = 0;
    let smaller: number = 0;    
    let totalSum: number = 0;

    array.forEach((num, index) => {
        if(index === 0) smaller = num;
        totalSum = totalSum + num;
        if(bigger < num) bigger = num;
        if(smaller > num) smaller = num;
    })


    return {
        'bigger': bigger,
        'smaller': smaller,
        'average': totalSum/array.length
    }
}

export const result: Record<string, number> = chlg3(decimals);

console.log(result);