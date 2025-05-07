//Valida si un número es guay/cool

export const isCool: (num: number) => boolean = (num) => {
    let value: number = 0;

    for(let i = 1; i <= num; i++) {
        if(value === num) return true;
        if(value > num) return false;
        
        value = value + i;
    }
    
    return false;
}  

export const num: number = 15;

export const result: boolean = isCool(num);
console.log(`${num} is ${result ? 'Cool' : 'Not cool'}`);