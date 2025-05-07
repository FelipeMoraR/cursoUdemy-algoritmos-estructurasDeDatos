//Divide dos números sin utilizar el operador de división.

//Mi solución
export const a: number = 9.56;
export const b: number = -2.2;

export const specialDivition: (num1: number, num2: number) => number = (num1, num2) => {
    let result: string = '';
    let valueToSave: number = 0;
    let numbersAreEqualSign: boolean = (num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0) ? true : false;
    let numberNeedToBeParsed: boolean = num1 < 0 || num2 < 0 ? true : false;
    const maxIterations: number = 20;
    let countMaxIteration: number = 0;

    if(num2 === 0) {
        console.error('0 could be a divisor');
        return Infinity;
    }

    if(num1 === 0) return 0;

    if(numberNeedToBeParsed) {
        num1 = num1 < 0 ? num1 * -1 : num1;
        num2 = num2 < 0 ? num2 * -1 : num2;
    }

    while(num1 !== 0) {
        console.log('enter ', countMaxIteration, num1)
        countMaxIteration++;
        
        if(maxIterations < countMaxIteration) break;

        if(num1 >= num2){
            while(num1 >= num2) {
                num1 = num1 - num2;
                valueToSave++;
            }
            result = result + valueToSave;
            valueToSave = 0;
        } else {
            num1 = num1 * 10;
            result === '' ? result = '0.' : !result.includes('.') ? result = result + '.' : result;
        }
    }
    console.log(result);
    return numbersAreEqualSign ?  parseFloat(result) : parseFloat(result) * -1;
} 

export const result: number = specialDivition(a, b);
console.log('Result of the function => ', result);
console.log('Result using division operator => ', a / b);