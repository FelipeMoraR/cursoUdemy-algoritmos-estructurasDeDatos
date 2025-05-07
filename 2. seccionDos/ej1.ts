//Resta dos números sin el operador de resta.

//Mi solución
const a = 4;
const b = 2;

const specialSubstract: (x: number, y: number) => number = (num1, num2) => {
    const newNumber2 = num2 * -1;

    return num1 + newNumber2;
}

const result: number = specialSubstract(a, b); 

console.log('result => ', result);

//Solución del curso
const specialSubstract2: (x: number, y: number) => number = (num1, num2) => {
    let result: number = 0;

    while(num1 > num2) {
        num2++;
        result++;
    }

    return result;
}

const result2: number = specialSubstract2(a, b);

console.log(result2);
//#El problema de esta solución es que solo se limita a números enteros positivos, no funciona cuando intentas hacer una resta y el resultado debe ser un número negativo.