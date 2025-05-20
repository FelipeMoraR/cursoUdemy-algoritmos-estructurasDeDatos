//Eleva un numero sin utilizar el operador de potencia.

//Mi solución
export const a: number = 6;
export const b: number = 4;

export const specialPotential: (a: number, b: number) => number = (num1, num2) => {
    let iteration: number = 0;
    let multiply: number = 0;

    for(let i: number = 1; i < num2; i++) {
        const anchorNumber = multiply === 0 ? num1 : multiply;
        multiply = 0;
        while(num1 > iteration) {
            iteration++;
            multiply = multiply + anchorNumber;
        }

        iteration = 0;    
    }

    return multiply
} 

export const result: number = specialPotential(a, b);
console.log('Result of the function => ', result);
console.log('Result using potential operator => ', a**b);

//Solución del curso
export const a2: number = -2;
export const b2: number = 4;

export const specialPotential2: (a: number, b: number) => number = (num1, num2) => {
    let value: number = 1;
    
    while(num2){
        value = value * num1
        num2--;
    }

    return value;
} 

export const result2: number = specialPotential(a, b);
console.log('Result of the specialPotential => ', result);
console.log('Result using the potential operator => ', a ** b);