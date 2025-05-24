const arrayMonths: Array<Array<Array<string>>> = new Array(12);
const dayPerMonth: Record<number, number> = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31
}

for (let i: number = 0; i < arrayMonths.length; i++) {
  const arrayDaysPerMonth: Array<Array<string>> = new Array(dayPerMonth[i]);
  arrayMonths[i] = arrayDaysPerMonth;
  for (let j: number = 0; j < arrayDaysPerMonth.length; j++) { 
    const standarRoutineJanuary: Array<string> = [`${j + 1}`, 'Wake up', 'Pl' ];
    const standarRoutineMarch: Array<string> = [`${j + 1}`, 'Wake up', 'Eat' ];
    
    if(i === 0) {
      arrayDaysPerMonth[j] = standarRoutineJanuary;
    }
    if (i === 2) {
      arrayDaysPerMonth[j] = standarRoutineMarch;
    }
  }
}

console.log(arrayMonths);

