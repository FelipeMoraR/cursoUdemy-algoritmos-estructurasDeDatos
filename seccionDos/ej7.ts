//Funcion que detecte si un número es perfecto o no.

//Mi Solución
export const num: number = 40000000000;

export const isPerfect: (num: number) => boolean = (num) => {
    let acumulator: number = 1;

    for(let i = num - 1; i < num && i > 1; i--) {
        if(acumulator > num) break;
        if (num % i == 0) acumulator = acumulator + i;
    }

    return acumulator === num;
}

export const result: boolean = isPerfect(num);
console.log(`${num} is ${result ? 'Perfect' : 'Not perfect'}`)