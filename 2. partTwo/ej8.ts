//Saber si el numero seleccionado es primo

export const num: number = 999983;

export const numberIsPrime: (num: number) => boolean = (num) => {
    let isPrime: boolean = true;

    for(let i = 2; i < num/2 && isPrime; i++) {
        if (num % i === 0) isPrime = false;
    }

    return isPrime;
}

export const result: boolean = numberIsPrime(num);
console.log(`${num} is ${result ? 'Prime' : 'Not prime'}`);