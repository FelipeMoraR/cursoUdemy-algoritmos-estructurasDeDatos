export const recursiveMultiplication: (num: number, multy: number) => number = (num, multly) => {
    let isNegative: boolean = false;

    if(multly === 0) return 0;
    if(multly < 0) {
        isNegative = true;
        multly = multly * -1;
    }
        
    if(multly > 1) num = num + recursiveMultiplication(num, multly - 1);

    return isNegative ? num * -1 : num
}

export const num1: number = 10;
export const num2: number = -3;
export const result: number = recursiveMultiplication(num1, num2);

console.log(`${num1} x ${num2} = ${result}`);