//Multiplica dos numeros sin utilizar el operador de multiplicar.

//Mi solución.
export const a: number = -2;
export const b: number = 3;

export const specialMultiply: (a: number, b: number) => number = (num1, num2) => {
    let iteration: number = 0;
    let multipy: number = 0;
    const numbersHasEqualsSings = (num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0) ? true : false;
    const numbersHasToBeParsed = num1 < 0 || num2 < 0 ? true : false;

    if(numbersHasToBeParsed) {
        num1 = num1 < 0 ? num1 * -1 : num1;
        num2 = num2 < 0 ? num2 * -1 : num2;
    }

    while (num2 > iteration) {
        iteration++;
        multipy = multipy + num1;
    }

    return numbersHasEqualsSings ? multipy : multipy * -1
} 

export const result: number = specialMultiply(a, b);
console.log('Result of the specialMultiply => ', result);
console.log('Result using the multipy operator => ', a * b);