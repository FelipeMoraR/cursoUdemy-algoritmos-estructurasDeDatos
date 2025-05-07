//Suma dos numeros sin utilizar el operador de suma.

//Mi solución
export const a: number = 6;
export const b: number = 4;

export const specialAddition: (a: number, b: number) => number = (num1, num2) => {
    const newNumber2: number = num2 * -1;

    return num1 - newNumber2
} 

export const result: number = specialAddition(a, b);
console.log('Result of the function => ', result);
console.log('Result using potential operator => ', a + b);