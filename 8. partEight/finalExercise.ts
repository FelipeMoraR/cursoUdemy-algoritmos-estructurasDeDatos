interface ITask {
    name: string,
    next: ITask | null
}
const arrayMonths2: Array<Array<ITask>> = new Array(12);
const dayPerMonth2: Record<number, number> = {
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

const validateMonths = (month: number): boolean => {
    if (!Number.isInteger(month) || isNaN(month) || month < 1 || month > 12) {
        console.log('Invalid month, has to be bigger than 1 and lower than 12');
        return false;
    }

    return true;
};

const validateDayMonth = (monthParsed: number, day: number): boolean => {
    if (!Number.isInteger(day) || isNaN(day)) {
        console.log('Invalid day, must be an integer');
        return false;
    }

    const maxDaysMonth: number = arrayMonths2[monthParsed].length;

    if (maxDaysMonth < day || day < 0) {
        console.log('Day invalid, max value for this month is:', maxDaysMonth);
        return false;
    }

    return true;
}

const generateTaskCalendar = (): void => {
    for (let i: number = 0; i < arrayMonths2.length; i++) {
        const arrayDaysPerMonth: Array<ITask> = new Array(dayPerMonth2[i]);
        arrayMonths2[i] = arrayDaysPerMonth;
    }
}

const addTaskToTheList = (name: string, month: number, day: number): void => {
    if(!arrayMonths2[0]) {
        console.log('Array month is empty, please generate the list');
        return;
    }

    if(!validateMonths(month)) return;

    const monthParsed: number = month - 1;
    const dayParsed: number = day - 1;

    if(!validateDayMonth(monthParsed, dayParsed)) return;

    const newTask: ITask = { name, next: null};
    // if is the first task of the day
    if(!arrayMonths2[monthParsed][dayParsed]) {
        arrayMonths2[monthParsed][dayParsed] = newTask;
        return;
    }

    let dayTask: ITask = arrayMonths2[monthParsed][dayParsed];

    for (let i: number = 0; dayTask; i++) {
        if (!dayTask.next) {
            dayTask.next = newTask;
            console.log('Task added!!');
            return;
        }

        dayTask = dayTask.next;
    }
}

const listDayTask = (month: number, day: number): void => {
    if(!validateMonths(month)) return;
    
    const monthParsed: number = month - 1;
    const dayParsed: number = day - 1;
    if(!validateDayMonth(monthParsed, dayParsed)) return;

    let dayTask: ITask | null | undefined = arrayMonths2[monthParsed][dayParsed];
    
    if(!dayTask) {
        console.log('No task that day');
        return
    }

    for (let i: number = 1; dayTask; i++) {
        console.log(`Task ${i}: ${dayTask.name}`);
        dayTask = dayTask.next;
    }
}

generateTaskCalendar();
addTaskToTheList('Take breakFast', 2, 12);
addTaskToTheList('Take lunch', 2, 12);
addTaskToTheList('Happy new fkin YEAR LESTGOOOOOOOOO', 1, 1);
addTaskToTheList('Eat cocacola yupiiiiiiiiiiiiiiiiii', 1, 1);
