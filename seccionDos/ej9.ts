//Crea una función que detecte los números amigos

export const num1: number = -220;
export const num2: number = 284;

export const numbersAreFriends: (num1: number, num2: number) => boolean = (num1, num2) => {
    let sumDivisorsNum1: number = 1;
    const oneNumIsNegative: boolean = num1 < 0 || num2 < 0;
    
    if(oneNumIsNegative) {
        console.error('Number not valid, only positives');
        return false
    }

    for(let i = num1 - 1; i < num1 && i > 1; i--) {
        if(num1 % i === 0) sumDivisorsNum1 += i;
    }

    console.log('Divisors sumatory of the first number => ', sumDivisorsNum1);

    if(num2 !== sumDivisorsNum1) return false;

    let sumDivisorsNum2: number = 1;

    for(let i = num2 - 1; i < num2 && i > 1; i--) {
        if (sumDivisorsNum2 > num1) break
        if(num2 % i === 0) sumDivisorsNum2 += i;
    }

    console.log('Divisors sumatory of the second number => ', sumDivisorsNum2);

    if(num1 !== sumDivisorsNum2) return false;

    return true;
}

export const result: boolean = numbersAreFriends(num1, num2);
console.log(`${num1} and ${num2} are ${result ? 'Friends' : 'Not friends'}`)