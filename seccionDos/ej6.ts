//Realiza un algoritmo para sacar factoriales.

export const a: number = 5;

export const factorial: (a: number) => number = (num1) => {
    
    if(a < 0) {
        console.error('Number must be more than 0');
        return 0
    };

    let result: number = 1;

    for(let i = 1; a >= i; i++) {
        result = i * result;
    }

    return result;
} 

export const result: number = factorial(a);
console.log('Result of the factorial => ', result);